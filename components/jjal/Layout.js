import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height:100vh;
  }};
  background: #f5f6f7;
`

const JJalContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > button {
    border: 2px solid pink;
    border-radius: 3px;
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
      ctx.drawImage(imageOn, 0, 0)
    }
    ctx.lineWidth = 5
    ctx.strokeStyle = `black`
    ctx.strokeText(text, canvas.width / 2, canvas.height - 30)
    ctx.fillStyle = `white`
    ctx.fillText(text, canvas.width / 2, canvas.height - 30)

    const href = canvas.toDataURL()
    setDownloadHref(href)
  })

  const [text, setText] = useState('')
  const [imageOn, setImageOn] = useState('')
  const [downloadHref, setDownloadHref] = useState('')

  const handleImage = e => {
    var canvas = document.getElementById('imageCanvas')
    var ctx = canvas.getContext('2d')
    var reader = new FileReader()
    reader.onload = event => {
      var img = new Image()
      img.onload = () => {
        canvas.width = img.width / 5
        canvas.height = img.height / 5
        ctx.drawImage(img, 0, 0)
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
        <input onChange={textChangeHandler} type="text" size="40" placeholder="Type text here!" />
      </JJalContainer>
      <a href={downloadHref} download="sample.png">
        Download
      </a>
    </BackgroundContainer>
  )
}

export default Layout
