import { useCallback, useEffect, useRef, useState } from 'react'
import useMobileDetect from 'src/hooks/useMobileDetect'

const DraggableCarousel = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startClientX, setStartClientX] = useState(0)
  const [endClientX, setEndClientX] = useState(0)
  const [momentum, setMomentum] = useState(0)
  const isMobile = useMobileDetect()

  useEffect(() => {
    const preventScroll = (e) => {
      if (isDragging) {
        e.preventDefault()
      }
    }

    window.addEventListener('touchmove', preventScroll, { passive: false })

    return () => {
      window.removeEventListener('touchmove', preventScroll)
    }
  }, [isDragging])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX - translateX)
  }

  const getMinTranslateX = useCallback(() => {
    const width = carouselRef.current?.getBoundingClientRect().width || 0
    return (
      width -
      ((width > 1024 ? 420 : 300) * children.length +
        (width > 1024 ? 48 : 24) * (children.length - 1)) -
      24
    )
  }, [children.length])

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return
    const x = e.clientX - startX
    if (x > 0) return setTranslateX(0)
    if (x < getMinTranslateX()) return setTranslateX(getMinTranslateX())

    setTranslateX(x)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (!isDragging && momentum) {
      const direction = endClientX - startClientX > 0 ? -1 : 1
      console.log(direction)
      const momentumEffect = () => {
        const newTranslateX = translateX + direction * momentum
        if (newTranslateX > 0 || newTranslateX < getMinTranslateX()) {
          setMomentum(0)
        } else {
          setTranslateX(newTranslateX)
          setMomentum(momentum * 0.95)
        }
        if (Math.abs(momentum) > 0.5) {
          requestAnimationFrame(momentumEffect)
        }
      }
      requestAnimationFrame(momentumEffect)
    }
  }, [
    isDragging,
    momentum,
    translateX,
    startClientX,
    endClientX,
    getMinTranslateX,
  ])

  // const handleTouchStart = (e) => {
  //   setIsDragging(true)
  //   // setMomentum(0)
  //   setStartClientX(e.touches[0].clientX)
  //   setStartX(e.touches[0].clientX - translateX)
  // }

  // const handleTouchMove = (e) => {
  //   if (!isDragging || !carouselRef.current) return
  //   const x = e.touches[0].clientX - startX
  //   if (x > 0) return setTranslateX(0)
  //   if (x < getMinTranslateX()) return setTranslateX(getMinTranslateX())

  //   setTranslateX(x)
  // }

  // const handleTouchEnd = (e) => {
  //   // const endTime = Date.now()
  //   setEndClientX(e.changedTouches[0].clientX)
  //   setIsDragging(false)
  //   // setMomentum(Math.abs(endClientX - startClientX) / 200)
  // }

  return (
    <div
      className={`grid-flow-col grid lg:gap-12 gap-6 duration-100 px-4 carousel`}
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
      style={{
        transform: `translateX(${translateX}px)`,
        overflowX: isMobile ? 'scroll' : 'visible',
      }}
    >
      {children}
    </div>
  )
}

export default DraggableCarousel
