import { useEffect } from 'react'
import './ProductsServices.css'

function ProductsServices() {
  useEffect(() => {
    document.title = 'Products & Services | Riften Info';
  }, []);

  return (
    <>
      <div>
        <h2 className="common_animated_title">
          {"Products & Services".split("").map((char, i) => (
            <span key={i} style={{
              display: 'inline-block',
              opacity: 0,
              animation: `fadeInLeft 0.4s forwards`,
              animationDelay: `${i * 0.08}s`
            }}>{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </h2>
      </div>
      <div className="common_padding">
        <p>
        </p>
      </div>
    </>
  )
}

export default ProductsServices
