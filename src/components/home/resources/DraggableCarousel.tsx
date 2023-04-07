import { useRef, useState } from 'react'

const DraggableCarousel = ({ children, screenWidth }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX - translateX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return
    const x = e.clientX - startX
    if (x > 0) return setTranslateX(0)

    setTranslateX(x)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX - translateX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return
    const x = e.touches[0].clientX - startX
    if (x > 0) return setTranslateX(0)
    console.log(carouselRef.current.getBoundingClientRect())
    setTranslateX(x)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div
      className="grid-flow-col grid lg:gap-12 gap-6 duration-200 w-screen"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ transform: `translateX(${translateX}px)` }}
    >
      {children}
    </div>
  )
}

export default DraggableCarousel
