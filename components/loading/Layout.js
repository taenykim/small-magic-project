import React, { useEffect, useState, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: white;
`

const spin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

const positionbottom = keyframes`
  from{ top:100px; opacity:0 } 
  to{ top:0; opacity:1 }
`

const customAni = keyframes`
0%, 100% {
  transform: translatey(0); 
 }
 50% {
  transform: translatey(20px);
 }
`

const MainLoader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: darkviolet;
  z-index: 20;
`

const MainLoaderText = styled.div`
  position: absolute;
  font-size: 32px;
  text-shadow: 2px 2px 4px black;
  font-family: escore9;
  color: ${(props) => {
    return props.color
  }};
  animation: ${customAni} 1.5s ease-in-out infinite;
  animation-delay: ${(props) => {
    return props.delay
  }};
  margin-left: ${(props) => {
    return props.transX
  }};
`

const Loader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  animation: ${spin} 2s linear infinite;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  & > button {
    border: 2px solid pink;
    border-radius: 4px;
    padding: 4px;
    margin: 6px;
    cursor: pointer;
  }
`

const TextContainer = styled.div`
  margin-top: 100px;
  width: 100vw;
  justify-content: center;
  flex-wrap: wrap;
  animation-name: ${positionbottom};
  animation-duration: 1s;
`

const Layout = () => {
  const [imgLoadToggle, setImgLoadToggle] = useState(false)
  const [imgArr, setImgArr] = useState([])

  const crawling_cat = useCallback(() => {
    console.log('this')
    const cheerio = require('cheerio')
    const url = `https://cors-anywhere.herokuapp.com/https://wall.alphacoders.com/search.php?search=$cat`
    fetch(url)
      .then((res) => {
        return res.text()
      })
      .then((text) => {
        console.log('고양이')
        const $ = cheerio.load(text)
        let json = [],
          id,
          link,
          img
        if (window.innerWidth < 1070) {
          $('#page_container > div:nth-child(6) > div.thumb-container').each(function (i, elem) {
            id = i
            link = $(this).find('div.thumb-container > a').attr('href')
            img = $(this).find('div.thumb-container > a.wallpaper-thumb > img').attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        } else {
          $('#page_container > div:nth-child(6) > div.thumb-container-big').each(function (
            i,
            elem
          ) {
            id = i
            link = $(this).find('div.thumb-container > div.boxgrid > a').attr('href')
            img = $(this).find('div.thumb-container > div.boxgrid > a > img').attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        }
        console.log(json)
        return json
      })
      .then((json) => {
        setImgArr(json)
        showPage()
      })
      .catch((error) => console.log(error))
  }, [])

  const crawling_dog = useCallback(() => {
    const cheerio = require('cheerio')
    const url = `https://cors-anywhere.herokuapp.com/https://wall.alphacoders.com/search.php?search=$dog`
    fetch(url)
      .then((res) => {
        return res.text()
      })
      .then((text) => {
        console.log('강아지')
        const $ = cheerio.load(text)
        let json = [],
          id,
          link,
          img
        if (window.innerWidth < 1070) {
          $('#page_container > div:nth-child(6) > div.thumb-container').each(function (i, elem) {
            id = i
            link = $(this).find('div.thumb-container > a').attr('href')
            img = $(this).find('div.thumb-container > a.wallpaper-thumb > img').attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        } else {
          $('#page_container > div:nth-child(6) > div.thumb-container-big').each(function (
            i,
            elem
          ) {
            id = i
            link = $(this).find('div.thumb-container > div.boxgrid > a').attr('href')
            img = $(this).find('div.thumb-container > div.boxgrid > a > img').attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        }
        console.log(json)
        return json
      })
      .then((json) => {
        setImgArr(json)
        showPage()
      })
      .catch((error) => console.log(error))
  }, [])

  const showFull = () => {
    document.getElementById('main_loader').style.display = 'none'
    document.body.style.display = 'flex'
    setImgLoadToggle(true)
  }

  const loadPage = () => {
    document.getElementById('first_loader').style.display = 'block'
    document.getElementById('myDiv').style.display = 'none'
  }
  const showPage = () => {
    document.getElementById('first_loader').style.display = 'none'
    document.getElementById('myDiv').style.display = 'flex'
  }
  useEffect(() => {
    if (!imgLoadToggle) {
      crawling_cat()
      setTimeout(showFull, 3000)
    }
    document.getElementById('cat_button').addEventListener('click', (e) => {
      e.stopImmediatePropagation()
      loadPage()
      crawling_cat()
    })
    document.getElementById('dog_button').addEventListener('click', (e) => {
      e.stopImmediatePropagation()

      loadPage()
      crawling_dog()
    })
  })
  return (
    <BackgroundContainer>
      <ContentsMenubar name="loading" />
      <MainLoader id="main_loader">
        <MainLoaderText transX="12px" delay="0.35s" color="firebrick">
          LOADING
        </MainLoaderText>
        <MainLoaderText transX="10px" delay="0.28s" color="darkgoldenrod">
          LOADING
        </MainLoaderText>
        <MainLoaderText transX="8px" delay="0.21s" color="darkolivegreen">
          LOADING
        </MainLoaderText>
        <MainLoaderText transX="6px" delay="0.14s" color="darksalmon">
          LOADING
        </MainLoaderText>
        <MainLoaderText transX="4px" delay="0.07s" color="cornflowerblue">
          LOADING
        </MainLoaderText>
        <MainLoaderText delay="0s" color="white">
          LOADING
        </MainLoaderText>
      </MainLoader>
      <Loader id="first_loader"></Loader>
      <Description>
        <p
          style={{
            fontSize: '20px',
            fontFamily: 'escore7',
            color: 'pink',
            textShadow: '2px 2px 4px black',
            textAlign: 'center',
          }}
        >
          버튼을 클릭하여 크롤링데이터를 불러오세요
        </p>
        <p style={{ fontSize: '10px', fontFamily: 'escore5', marginTop: '10px' }}>
          Image data from{'  '}
          <a href="https://wall.alphacoders.com/" target="_blank">
            alphacoders.com
          </a>
        </p>
      </Description>
      <ButtonContainer>
        <button id="cat_button">고양이(default)</button>
        <button id="dog_button">강아지</button>
      </ButtonContainer>
      <TextContainer id="myDiv" style={{ display: 'none' }}>
        {imgArr.map((item, i) => {
          return <img key={i} src={item.img}></img>
        })}
      </TextContainer>
    </BackgroundContainer>
  )
}

export default Layout
