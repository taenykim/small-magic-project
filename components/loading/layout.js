import React, { useEffect, useState } from 'react'
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

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 100px;
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

  const crawling_cat = () => {
    const cheerio = require('cheerio')
    const url = `https://cors-anywhere.herokuapp.com/https://wall.alphacoders.com/search.php?search=$cat`
    fetch(url)
      .then(res => {
        return res.text()
      })
      .then(text => {
        setTimeout(showPage, 500)
        const $ = cheerio.load(text)
        let json = [],
          id,
          link,
          img
        if (window.innerWidth < 1070) {
          $('#page_container > div:nth-child(6) > div.thumb-container').each(function(i, elem) {
            id = i
            link = $(this)
              .find('div.thumb-container > a')
              .attr('href')
            img = $(this)
              .find('div.thumb-container > a.wallpaper-thumb > img')
              .attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        } else {
          $('#page_container > div:nth-child(6) > div.thumb-container-big').each(function(i, elem) {
            id = i
            link = $(this)
              .find('div.thumb-container > div.boxgrid > a')
              .attr('href')
            img = $(this)
              .find('div.thumb-container > div.boxgrid > a > img')
              .attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        }
        setImgArr(json)
      })
      .catch(error => console.log(error))
  }
  const crawling_dog = () => {
    const cheerio = require('cheerio')
    const url = `https://cors-anywhere.herokuapp.com/https://wall.alphacoders.com/search.php?search=$dog`
    fetch(url)
      .then(res => {
        return res.text()
      })
      .then(text => {
        setTimeout(showPage, 500)
        const $ = cheerio.load(text)
        let json = [],
          id,
          link,
          img
        if (window.innerWidth < 1070) {
          $('#page_container > div:nth-child(6) > div.thumb-container').each(function(i, elem) {
            id = i
            link = $(this)
              .find('div.thumb-container > a')
              .attr('href')
            img = $(this)
              .find('div.thumb-container > a.wallpaper-thumb > img')
              .attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        } else {
          $('#page_container > div:nth-child(6) > div.thumb-container-big').each(function(i, elem) {
            id = i
            link = $(this)
              .find('div.thumb-container > div.boxgrid > a')
              .attr('href')
            img = $(this)
              .find('div.thumb-container > div.boxgrid > a > img')
              .attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        }
        setImgArr(json)
      })
      .catch(error => console.log(error))
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
      setImgLoadToggle(true)
    }
    document.getElementById('cat_button').addEventListener('click', () => {
      loadPage()
      crawling_cat()
    })
    document.getElementById('dog_button').addEventListener('click', () => {
      loadPage()
      crawling_dog()
    })
  })
  return (
    <BackgroundContainer>
      <ContentsMenubar name="loading" />
      <Loader id="first_loader"></Loader>
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
