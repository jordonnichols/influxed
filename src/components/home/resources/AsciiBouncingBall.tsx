'use client'
import { OrbitControls, useCursor } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useLayoutEffect,useMemo, useRef, useState } from 'react'
import { Mesh } from 'three'
import { AsciiEffect } from 'three-stdlib'

export default function AsciiBouncingBall() {
  return (
    <Canvas className="h-full w-full">
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <OrbitControls />
      {/* @ts-expect-error */}
      <AsciiRenderer fgColor="white" bgColor="black" />
    </Canvas>
  )
}

function Torusknot(props) {
  const ref = useRef<Mesh>()
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, delta) =>
    ref.current
      ? (ref.current.rotation.x = ref.current.rotation.y += delta / 2)
      : undefined
  )
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1.25}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function AsciiRenderer({
  renderIndex = 1,
  bgColor = 'black',
  fgColor = 'white',
  characters = ' .:-+*=%@#',
  invert = true,
  color = false,
  resolution = 0.15,
}) {
  // Reactive state
  const { size, gl, scene, camera } = useThree()

  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, {
      invert,
      color,
      resolution,
    })
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.pointerEvents = 'none'
    return effect
  }, [characters, invert, color, resolution, gl])

  // Styling
  useLayoutEffect(() => {
    effect.domElement.style.color = fgColor
    effect.domElement.style.backgroundColor = bgColor
  }, [fgColor, bgColor, effect])

  // Append on mount, remove on unmount
  useEffect(() => {
    if (gl.domElement && gl.domElement.parentNode) {
      gl.domElement.style.opacity = '0'
      gl.domElement.parentNode.appendChild(effect.domElement)
    }
    return () => {
      if (gl.domElement && gl.domElement.parentNode) {
        gl.domElement.style.opacity = '1'
        gl.domElement.parentNode.removeChild(effect.domElement)
      }
    }
  }, [effect, gl])

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)

  // This component returns nothing, it is a purely logical
}
