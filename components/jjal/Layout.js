import React, { useEffect } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const imagePaths = ['cancel.png']

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
  useEffect(() => {})

  function handleImage(e) {
    var canvas = document.getElementById('imageCanvas')
    var ctx = canvas.getContext('2d')
    var reader = new FileReader()
    reader.onload = function(event) {
      var img = new Image()
      img.onload = function() {
        canvas.width = img.width / 10
        canvas.height = img.height / 10
        ctx.drawImage(img, 0, 0)
      }
      img.src = event.target.result
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <BackgroundContainer>
      <ContentsMenubar name="jjal" />
      <JJalContainer>
        <JJalForm id="form" runat="server">
          <label>Image File:</label>
          <br />
          <input type="file" id="imageLoader" name="imageLoader" onChange={handleImage} />
          <canvas id="imageCanvas"></canvas>
        </JJalForm>
      </JJalContainer>
    </BackgroundContainer>
  )
}

export default Layout
