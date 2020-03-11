import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top:60px;
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
  & > a {
    margin-top: 10px;
    margin-bottom: 100px;
  }
`

const JJalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Layout = () => {
  useEffect(() => {
    var canvas = document.getElementById('imageCanvas')
    const ctx = canvas.getContext('2d')
    ctx.textAlign = 'center' // 가로 가운데 정렬
    ctx.textBaseline = 'middle' // 세로 가운데 정렬
    ctx.font = '20px Gulim'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (imageOn) {
      ctx.drawImage(imageOn, 0, 0, imageOnWidth, imageOnHeight)
    }
    ctx.lineWidth = 5
    ctx.strokeStyle = `black`
    ctx.strokeText(text, canvas.width / 2, canvas.height - 30)
    ctx.fillStyle = `white`
    ctx.fillText(text, canvas.width / 2, canvas.height - 30)

    const href = canvas.toDataURL()
    setDownloadHref(href)
  })

  const [text, setText] = useState('짤 문구입력')
  const [imageOn, setImageOn] = useState('')
  const [imageOnWidth, setImageOnWidth] = useState('')
  const [imageOnHeight, setImageOnHeight] = useState('')
  const [downloadHref, setDownloadHref] = useState('')

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
      <ContentsMenubar name="jjal" />
      <JJalContainer>
        <JJalForm>
          <input type="file" id="imageLoader" name="imageLoader" onChange={handleImage} />
          <canvas id="imageCanvas"></canvas>
        </JJalForm>
        {/* {text} */}
        <input onChange={textChangeHandler} type="text" size="40" value={text} />
        <a href={downloadHref} download="sample.png">
          Download
        </a>
      </JJalContainer>
    </BackgroundContainer>
  )
}

export default Layout
