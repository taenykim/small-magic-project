import React, { useState } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  margin-top: 10px;
  z-index: 5;
`

const FullscreenText = styled.p`
  font-size: 12px;
  cursor: pointer;
`

const Header = () => {
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
    <HeaderContainer>
      <FullscreenText onClick={openFullScreen}>
        {full ? 'exit full screen' : 'full screen'}
      </FullscreenText>
      {}
    </HeaderContainer>
  )
}

export default Header
