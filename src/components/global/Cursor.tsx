'use client'
import { useEffect,useRef } from 'react'

const ArrowPointer = () => {
  const rootRef = useRef<HTMLElement>()
  if (document) {
    rootRef.current = document.body
  }
  const cursorRef = useRef<HTMLDivElement>(null)

  const positionRef = useRef({
    distanceX: 0,
    distanceY: 0,
    distance: 0,
    pointerX: 0,
    pointerY: 0,
  })
  const previousPointerXRef = useRef(0)
  const previousPointerYRef = useRef(0)
  const angleRef = useRef(0)
  const previousAngleRef = useRef(0)
  const angleDisplaceRef = useRef(0)
  const degreesRef = useRef(57.296)
  const cursorSizeRef = useRef(40)

  useEffect(() => {
    if (cursorRef.current) {
      const cursor = cursorRef.current

      const cursorStyle = {
        boxSizing: 'border-box',
        position: 'fixed',
        top: '0px',
        left: `${-cursorSizeRef.current / 2}px`,
        zIndex: '2147483647',
        width: `${cursorSizeRef.current}px`,
        height: `${cursorSizeRef.current}px`,
        transition: '250ms, transform 100ms',
        userSelect: 'none',
        pointerEvents: 'none',
      }

      Object.assign(cursor.style, cursorStyle)
      cursor.removeAttribute('hidden')

      return () => {
        cursor.remove()
      }
    }
  }, [])

  const move = (event) => {
    if (rootRef.current) {
      const position = positionRef.current
      position.distanceX =
        previousPointerXRef.current -
        (event.pageX + rootRef.current.getBoundingClientRect().x)
      position.distanceY =
        previousPointerYRef.current -
        (event.pageY + rootRef.current.getBoundingClientRect().y)
      position.pointerX =
        event.pageX + rootRef.current.getBoundingClientRect().x
      position.pointerY =
        event.pageY + rootRef.current.getBoundingClientRect().y
      position.distance = Math.sqrt(
        position.distanceY ** 2 + position.distanceX ** 2
      )
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.pointerX}px, ${position.pointerY}px, 0)`
      }

      if (position.distance > 1) {
        rotate(position)
      } else {
        if (cursorRef.current) {
          cursorRef.current.style.transform += ` rotate(${angleDisplaceRef.current}deg)`
        }
      }

      previousPointerXRef.current = position.pointerX
      previousPointerYRef.current = position.pointerY
    }
  }

  const rotate = (position) => {
    if (cursorRef.current) {
      const unsortedAngle =
        Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) *
        degreesRef.current
      let modAngle

      const style = cursorRef.current.style

      previousAngleRef.current = angleRef.current

      if (position.distanceX <= 0 && position.distanceY >= 0) {
        angleRef.current = 90 - unsortedAngle + 0
      } else if (position.distanceX < 0 && position.distanceY < 0) {
        angleRef.current = unsortedAngle + 90
      } else if (position.distanceX >= 0 && position.distanceY <= 0) {
        angleRef.current = 90 - unsortedAngle + 180
      } else if (position.distanceX > 0 && position.distanceY > 0) {
        angleRef.current = unsortedAngle + 270
      }

      if (isNaN(angleRef.current)) {
        angleRef.current = previousAngleRef.current
      } else {
        if (angleRef.current - previousAngleRef.current <= -270) {
          angleDisplaceRef.current +=
            360 + angleRef.current - previousAngleRef.current
        } else if (angleRef.current - previousAngleRef.current >= 270) {
          angleDisplaceRef.current +=
            angleRef.current - previousAngleRef.current - 360
        } else {
          angleDisplaceRef.current +=
            angleRef.current - previousAngleRef.current
        }
      }

      style.transform += ` rotate(${angleDisplaceRef.current}deg)`

      setTimeout(() => {
        modAngle =
          angleDisplaceRef.current >= 0
            ? angleDisplaceRef.current % 360
            : 360 + (angleDisplaceRef.current % 360)
        if (modAngle >= 45 && modAngle < 135) {
          style.left = `${cursorSizeRef.current}px`
          style.top = `${-cursorSizeRef.current / 2}px`
        } else if (modAngle >= 135 && modAngle < 225) {
          style.left = `${-cursorSizeRef.current / 2}px`
          style.top = `${-cursorSizeRef.current}px`
        } else if (modAngle >= 225 && modAngle < 315) {
          style.left = '0px'
          style.top = `${-cursorSizeRef.current / 2}px`
        } else {
          style.left = `${-cursorSizeRef.current / 2}px`
          style.top = '0px'
        }
      }, 0)
    }
  }

  useEffect(() => {
    const cursor = cursorRef.current
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      if (cursor) {
        cursor.remove()
      }
      return
    }

    document.onmousemove = (event) => {
      move(event)
    }

    return () => {
      document.onmousemove = null
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-${cursorSizeRef.current} z-50 w-[40px] h-[40px] transition-all select-none pointer-events-none`}
      ref={cursorRef}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          className="inner"
          d="M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z"
          fill="#fff"
        />
        <path
          className="outer"
          d="M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z"
          fill="#ef4444"
        />
      </svg>
    </div>
  )
}

export default ArrowPointer
