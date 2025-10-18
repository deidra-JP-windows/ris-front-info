import { useEffect } from 'react'
import './NewsRelease.css'

function NewsRelease() {
  useEffect(() => {
    document.title = 'News Release | Riften Info';
  }, []);

  return (
    <>
      <div>
        <h2 className="common_animated_title">
          {"News Release".split("").map((char, i) => (
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
      {/* ここにコンテンツを追加 */}
      <h2 className="common_animated_text">
        {"The recent trip was amazing. Let's go again.".split("").map((char, i) => (
          <span key={i} style={{
            display: 'inline-block',
            opacity: 0,
            animation: `fadeInLeft 0.4s forwards`,
            animationDelay: `${i * 0.08}s`
          }}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </h2>
      <div className="common_padding">
        <p>
        </p>
      </div>
    </>
  )
}

export default NewsRelease
