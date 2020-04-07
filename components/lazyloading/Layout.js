import React, { useEffect } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const obj = [
  <img
    className="lazy"
    src="https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1508291830/jeremywagner.me/using-webp-images/tacos-1x.jpg"
    data-src="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-2x.jpg"
    width="385"
    height="108"
    alt="Some tacos."
  />,
  <img
    className="lazy"
    src="https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1508210556/jeremywagner.me/using-webp-images/modem-2x.png"
    data-src="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/modem-2x.png"
    width="320"
    height="176"
    alt="A 56k modem."
  />,
  <img
    className="lazy"
    src="https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto:eco/v1509298941/jeremywagner.me/about/st-paul-1x.jpg"
    data-src="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1509298941/jeremywagner.me/about/st-paul-2x.jpg"
    width="400"
    height="267"
    alt="A city skyline."
  />,
]

const obj2 = [
  <img
    className="lazy"
    src="solid.jpg"
    data-src="thanos.png"
    width="400"
    height="267"
    alt="A city skyline."
  />,
  <img
    className="lazy"
    src="solid.jpg"
    data-src="spider.jpg"
    width="400"
    height="267"
    alt="A city skyline."
  />,
  <img
    className="lazy"
    src="solid.jpg"
    data-src="rocket.jpg"
    width="400"
    height="267"
    alt="A city skyline."
  />,
]

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: white;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    margin: 30px 0 30px 0;
    background: #222;
  }
  & > p {
    text-align: center;
    font-size: 16px;
    font-family: escore5;
    margin-bottom: 20px;
  }
  & > div {
    width: 100vw;
    padding: 10px 0 10px 0;
    background: yellow;
    text-align: center;
    font-size: 36px;
    font-family: escore9;
  }
`

const Layout = () => {
  for (let i = 0; i < 9; i++) {
    obj.push(obj[i])
  }
  for (let i = 0; i < 9; i++) {
    obj2.push(obj2[i])
  }
  useEffect(() => {
    console.log('this')
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
    let active = false

    const lazyLoad = () => {
      if (active === false) {
        active = true

        setTimeout(() => {
          lazyImages.map((lazyImage) => {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== 'none'
            ) {
              lazyImage.src = lazyImage.dataset.src
              lazyImage.classList.remove('lazy')

              lazyImages = lazyImages.filter(function (image) {
                return image !== lazyImage
              })

              if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoad)
                window.removeEventListener('resize', lazyLoad)
                window.removeEventListener('orientationchange', lazyLoad)
              }
            }
          })

          active = false
        }, 1000)
      }
    }

    document.addEventListener('scroll', lazyLoad)
    window.addEventListener('resize', lazyLoad)
    window.addEventListener('orientationchange', lazyLoad)
  })
  return (
    <BackgroundContainer>
      <ContentsMenubar name="loading" />
      <Contents style={{ marginTop: '100px' }}>
        <p>1초의 지연로딩(lazy loading) 구현</p>
        <div>흐린 이미지로 지연</div>
        {obj.map((item) => {
          return item
        })}
        <div>단색 이미지로 지연</div>
        {obj2.map((item) => {
          return item
        })}
      </Contents>
    </BackgroundContainer>
  )
}

export default Layout
