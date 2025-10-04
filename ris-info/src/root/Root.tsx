import { useEffect } from 'react'
import './Root.css'

function Root() {
  useEffect(() => {
      document.title = 'Riften Info';
    }, []);

  return (
    <>
      <div>
        <h2 className="common_animated_title">
          {"Riften".split("").map((char, i) => (
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

export default Root
