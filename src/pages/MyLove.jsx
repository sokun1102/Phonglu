import { useState } from 'react'
import './MyLove.css'

const IMAGES = [
  { src: '/love1.jpg', alt: 'Us 1' },
  { src: '/love2.jpg', alt: 'Us 2' },
  { src: '/love3.jpg', alt: 'Us 3' },
  { src: '/love4.jpg', alt: 'Us 4' },
  { src: '/love5.jpg', alt: 'Us 5' },
  { src: '/love6.jpg', alt: 'Us 6' },
]

const INFO_BOXES = [
  { label: 'Ngày quen', value: '24/11/2024' },
  { label: 'Sinh nhật Gấu', value: '19/01/2004' },
  { label: 'Sinh nhật Pong', value: '08/02/2004' },
  { label: 'Cặp đôi', value: 'Gấu & Pong' },
  { label: 'Năm quen', value: '2024' },
  { label: 'Mãi mãi', value: '❤' },
]

export default function MyLove() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="mylove-page">
      <section className="mylove-hero">
        <div className="container">
          <span className="mylove-badge">MY LOVE</span>
          <h1 className="mylove-title">Us</h1>
          <p className="mylove-desc">Gấu & Pong — moments we keep.</p>
        </div>
      </section>

      <div className="container mylove-body">
        <div
          className="mylove-mosaic"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hàng 1: ảnh | ảnh | Ngày quen */}
          <div className={`mylove-cell mylove-cell--img mylove-item-1 ${hoveredIndex !== null && hoveredIndex !== 0 ? 'mylove-cell--dim' : ''} ${hoveredIndex === 0 ? 'mylove-cell--active' : ''}`} onMouseEnter={() => setHoveredIndex(0)}>
            <img src={IMAGES[0].src} alt={IMAGES[0].alt} />
            <div className="mylove-cell-overlay" />
          </div>
          <div className={`mylove-cell mylove-cell--img mylove-item-2 ${hoveredIndex !== null && hoveredIndex !== 1 ? 'mylove-cell--dim' : ''} ${hoveredIndex === 1 ? 'mylove-cell--active' : ''}`} onMouseEnter={() => setHoveredIndex(1)}>
            <img src={IMAGES[1].src} alt={IMAGES[1].alt} />
            <div className="mylove-cell-overlay" />
          </div>
          <div className="mylove-info-box mylove-item-3">
            <span className="mylove-info-label">{INFO_BOXES[0].label}</span>
            <span className="mylove-info-value">{INFO_BOXES[0].value}</span>
          </div>

          {/* Hàng 2: ảnh | Cặp đôi | Năm quen */}
          <div className={`mylove-cell mylove-cell--img mylove-item-4 ${hoveredIndex !== null && hoveredIndex !== 2 ? 'mylove-cell--dim' : ''} ${hoveredIndex === 2 ? 'mylove-cell--active' : ''}`} onMouseEnter={() => setHoveredIndex(2)}>
            <img src={IMAGES[2].src} alt={IMAGES[2].alt} />
            <div className="mylove-cell-overlay" />
          </div>
          <div className="mylove-info-box mylove-item-5">
            <span className="mylove-info-label">{INFO_BOXES[3].label}</span>
            <span className="mylove-info-value">{INFO_BOXES[3].value}</span>
          </div>
          <div className="mylove-info-box mylove-item-6">
            <span className="mylove-info-label">{INFO_BOXES[4].label}</span>
            <span className="mylove-info-value">{INFO_BOXES[4].value}</span>
          </div>

          {/* Hàng 3: Sinh nhật Gấu | ảnh | Sinh nhật Pong */}
          <div className="mylove-info-box mylove-item-7">
            <span className="mylove-info-label">{INFO_BOXES[1].label}</span>
            <span className="mylove-info-value">{INFO_BOXES[1].value}</span>
          </div>
          <div className={`mylove-cell mylove-cell--img mylove-item-8 ${hoveredIndex !== null && hoveredIndex !== 3 ? 'mylove-cell--dim' : ''} ${hoveredIndex === 3 ? 'mylove-cell--active' : ''}`} onMouseEnter={() => setHoveredIndex(3)}>
            <img src={IMAGES[3].src} alt={IMAGES[3].alt} />
            <div className="mylove-cell-overlay" />
          </div>
          <div className="mylove-info-box mylove-item-9">
            <span className="mylove-info-label">{INFO_BOXES[2].label}</span>
            <span className="mylove-info-value">{INFO_BOXES[2].value}</span>
          </div>

          {/* Hàng 4: ảnh | ảnh | Mãi mãi */}
          <div className={`mylove-cell mylove-cell--img mylove-item-10 ${hoveredIndex !== null && hoveredIndex !== 4 ? 'mylove-cell--dim' : ''} ${hoveredIndex === 4 ? 'mylove-cell--active' : ''}`} onMouseEnter={() => setHoveredIndex(4)}>
            <img src={IMAGES[4].src} alt={IMAGES[4].alt} />
            <div className="mylove-cell-overlay" />
          </div>
          <div className={`mylove-cell mylove-cell--img mylove-item-11 ${hoveredIndex !== null && hoveredIndex !== 5 ? 'mylove-cell--dim' : ''} ${hoveredIndex === 5 ? 'mylove-cell--active' : ''}`} onMouseEnter={() => setHoveredIndex(5)}>
            <img src={IMAGES[5].src} alt={IMAGES[5].alt} />
            <div className="mylove-cell-overlay" />
          </div>
          <div className="mylove-info-box mylove-item-12">
            <span className="mylove-info-label">{INFO_BOXES[5].label}</span>
            <span className="mylove-info-value">{INFO_BOXES[5].value}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
