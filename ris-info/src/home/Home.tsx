import { useEffect } from 'react'
import './Home.css'

function Home() {
  useEffect(() => {
      document.title = 'Home | Riften Info';
    }, []);

  return (
    <>
      <div>
        <h2 className="common_animated_title">
          {"Home".split("").map((char, i) => (
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
      <p>Welcome to Riften Info</p>
      <p>Your one-stop solution for all information related to Riften.</p>
    </>
  )
}

export default Home
