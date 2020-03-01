import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 10px;
  z-index: 5;
  font-size: 12px;
  font-family: escore6;
  color: #666;
`

const FullscreenText = styled.p`
  cursor: pointer;
`

const NoteText = styled.p`
  cursor: pointer;
`

const Header = () => {
  const [full, setFull] = useState(false)

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      setFull(!full)
    })
  })

  const openFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <HeaderContainer>
      <FullscreenText onClick={openFullScreen}>
        {full ? 'exit full screen' : 'full screen'}
      </FullscreenText>
      &nbsp;&nbsp;|&nbsp;&nbsp;<NoteText> note</NoteText>
    </HeaderContainer>
  )
}

export default Header
