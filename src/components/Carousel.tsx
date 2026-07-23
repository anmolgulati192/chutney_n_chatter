import { useEffect, useState } from 'react'
import carousel1 from '../assets/carousel-1.png'
import carousel2 from '../assets/carousel-2.png'
import carousel3 from '../assets/carousel-3.png'
import styles from './Carousel.module.scss'

const slides = [
  {
    src: carousel1,
    alt: 'Fresh homemade platter',
    caption: 'Homemade food made with love',
  },
  {
    src: carousel2,
    alt: 'Starter selection',
    caption: 'Tasty starters for your event',
  },
  {
    src: carousel3,
    alt: 'Main course menu',
    caption: 'Delicious main course dishes',
  },
]

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.carousel}>
      <div className={styles.slideWrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          >
            <img src={slide.src} alt={slide.alt} />
            <div className={styles.caption}>{slide.caption}</div>
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? styles.dotActive : styles.dot}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
