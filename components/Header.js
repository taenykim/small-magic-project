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
  & > a {
    text-decoration: none;
    color: #666;
  }
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
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a
        href="https://taeny.dev/project/%EC%86%8C%EB%A7%88%EB%B2%95-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81/"
        target="_blank"
      >
        <NoteText>note</NoteText>
      </a>
    </HeaderContainer>
  )
}

export default Header
