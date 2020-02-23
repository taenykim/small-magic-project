import React, { useState } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 10px;
  z-index: 5;
`

const FullscreenText = styled.p`
  font-size: 12px;
  cursor: pointer;
`

const Footer = () => {
  const [full, setToggleFull] = useState(false)

  const openFullScreen = () => {
    const html = document.documentElement
    if (!full) {
      html.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
    setToggleFull(!full)
  }

  return (
    <FooterContainer>
      <FullscreenText onClick={openFullScreen}>
        {full ? 'exit full screen' : 'full screen'}
      </FullscreenText>
      {}
    </FooterContainer>
  )
}

export default Footer
