import { useCallback, useEffect, useRef, useState } from 'react'
import useMobileDetect from 'src/hooks/useMobileDetect'

const DraggableCarousel = ({ children, className = '' }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
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
    if (!isDragging || !carouselRef.current || getMinTranslateX() > 0) return
    const x = e.clientX - startX
    if (x > 0) return setTranslateX(0)
    if (x < getMinTranslateX()) return setTranslateX(getMinTranslateX())

    setTranslateX(x)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className={`grid-flow-col grid lg:gap-12 gap-6 duration-100 px-4 carousel ${className} ${
        getMinTranslateX() > 0 ? '!flex' : ''
      }`}
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
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
