import { useEffect, useRef, useState } from 'react'

const DraggableCarousel = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [velocity, setVelocity] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX - translateX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return
    const width = carouselRef.current.getBoundingClientRect().width
    const x = e.clientX - startX
    if (x > 0) return setTranslateX(0)
    if (
      x <
      width -
        ((width > 1024 ? 420 : 300) * children.length +
          (width > 1024 ? 48 : 24) * (children.length - 1))
    )
      return setTranslateX(
        width -
          ((width > 1024 ? 420 : 300) * children.length +
            (width > 1024 ? 48 : 24) * (children.length - 1))
      )

    setTranslateX(x)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (!isDragging && velocity && carouselRef.current) {
      const width = carouselRef.current.getBoundingClientRect().width
      const momentumEffect = () => {
        const newTranslateX = translateX + velocity
        if (newTranslateX > 0) return setTranslateX(0)
        if (
          newTranslateX <
          width -
            ((width > 1024 ? 420 : 300) * children.length +
              (width > 1024 ? 48 : 24) * (children.length - 1))
        )
          return setTranslateX(
            width -
              ((width > 1024 ? 420 : 300) * children.length +
                (width > 1024 ? 48 : 24) * (children.length - 1))
          )
        setTranslateX(newTranslateX)
        setVelocity(velocity * 0.95)

        if (Math.abs(velocity) > 0.5) {
          requestAnimationFrame(momentumEffect)
        }
      }
      requestAnimationFrame(momentumEffect)
    }
  }, [isDragging, velocity, translateX, children.length])

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX - translateX)
    setStartTime(Date.now())
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return
    const width = carouselRef.current.getBoundingClientRect().width
    const x = e.touches[0].clientX - startX
    if (x > 0) return setTranslateX(0)
    if (
      x <
      width -
        ((width > 1024 ? 420 : 300) * children.length +
          (width > 1024 ? 48 : 24) * (children.length - 1))
    )
      return setTranslateX(
        width -
          ((width > 1024 ? 420 : 300) * children.length +
            (width > 1024 ? 48 : 24) * (children.length - 1))
      )

    setTranslateX(x)
  }

  const handleTouchEnd = () => {
    const endTime = Date.now()
    const timeDelta = endTime - startTime
    setVelocity((translateX - (startX + translateX)) / timeDelta)
    setIsDragging(false)
  }

  return (
    <div
      className="grid-flow-col grid lg:gap-12 gap-6 duration-100"
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
