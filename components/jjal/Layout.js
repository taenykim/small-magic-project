import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'
import { useSelector } from 'react-redux'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top:70px;
  }};
  background: #f5f6f7;
`

const JJalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    margin-top: 10px;
    border: 2px solid pink;
    border-radius: 3px;
  }
  & > input {
    font-size: 12px;
    font-family: escore6;
    color: white;
    background: #555;
    padding-left: 10px;
    width: 220px;
    height: 30px;
    border-radius: 5px;
    border: 0px;
    width: 80vw;
    margin-top: 30px;
    margin-bottom: 100px;
    max-width: 600px;
  }
`

const JJalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;

    & > label {
      font-size: 12px;
      font-family: escore6;
      color: purple;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 30px;
      box-sizing: border-box;
      box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
      border-radius: 5px;
      background: #f5f6f7;
      cursor: pointer;
      margin: 10px;
    }
    & > label:active {
      box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
    }
    & > a {
      font-size: 12px;
      font-family: escore6;
      color: orange;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 30px;
      box-sizing: border-box;
      box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
      border-radius: 5px;
      background: #f5f6f7;
      cursor: pointer;
      text-decoration: none;
      margin: 10px;
    }
    & > a:active {
      box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
    }
  }

  & > canvas {
    width: 90%;
  }
`

const Layout = () => {
  const data = useSelector(state => state.jjal)

  const [text, setText] = useState(data.text || 'welcome to my page')
  const [imageOn, setImageOn] = useState(data.imageOn || '')
  const [imageOnWidth, setImageOnWidth] = useState(data.imageOnWidth || '')
  const [imageOnHeight, setImageOnHeight] = useState(data.imageOnHeight || '')
  const [downloadHref, setDownloadHref] = useState(data.downloadHref || '')

  useEffect(() => {
    var canvas = document.getElementById('imageCanvas')
    const ctx = canvas.getContext('2d')
    ctx.textAlign = 'center' // 가로 가운데 정렬
    ctx.textBaseline = 'middle' // 세로 가운데 정렬
    ctx.font = '20px Gulim'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (imageOn) {
      ctx.drawImage(imageOn, 0, 0, imageOnWidth, imageOnHeight)
    } else {
      ctx.fillStyle = 'dodgerblue'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    ctx.lineWidth = 5
    ctx.strokeStyle = `black`
    ctx.strokeText(text, canvas.width / 2, canvas.height - 30)
    ctx.fillStyle = `white`
    ctx.fillText(text, canvas.width / 2, canvas.height - 30)

    const href = canvas.toDataURL()
    setDownloadHref(href)
  })

  const handleImage = e => {
    var canvas = document.getElementById('imageCanvas')
    var ctx = canvas.getContext('2d')
    var reader = new FileReader()
    // onload 의 실행시점!
    reader.onload = event => {
      var img = new Image()
      img.onload = () => {
        let max_size = 800,
          // 최대 기준
          width = img.width,
          height = img.height

        if (width > height) {
          // 가로가 길 경우
          if (width > max_size) {
            height *= max_size / width
            width = max_size
          }
        } else {
          // 세로가 길 경우
          if (height > max_size) {
            width *= max_size / height
            height = max_size
          }
        }
        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)
        setImageOnWidth(width)
        setImageOnHeight(height)
      }
      img.src = event.target.result
      console.log('result', event.target.result)
      setImageOn(img)
    }
    reader.readAsDataURL(e.target.files[0])
    console.log('files[0]', e.target.files[0])
  }

  const textChangeHandler = e => {
    setText(e.target.value)
  }

  return (
    <BackgroundContainer>
      <ContentsMenubar
        name="jjal"
        data={{ text, imageOn, imageOnWidth, imageOnHeight, downloadHref }}
      />
      <JJalContainer>
        <JJalForm>
          <div>
            <label htmlFor="imageLoader">사진 업로드</label>
            <a href={downloadHref} download="sample.png">
              짤방 다운로드
            </a>
          </div>
          <input type="file" id="imageLoader" name="imageLoader" hidden onChange={handleImage} />

          <canvas id="imageCanvas"></canvas>
        </JJalForm>
        {/* {text} */}
        <input
          onChange={textChangeHandler}
          type="text"
          size="40"
          value={text}
          placeholder="문구를 입력하세요"
        />
      </JJalContainer>
    </BackgroundContainer>
  )
}

export default Layout
