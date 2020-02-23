import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { FULLSCREEN_TOGGLE } from '../reducers/wrapper'

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  margin-top: 10px;
  z-index: 5;
`

const FullscreenText = styled.p`
  font-size: 12px;
  cursor: pointer;
  font-family: escore6;
  color: #666;
`

const Header = () => {
  const [full, setFull] = useState(document.fullscreenElement)
  // const dispatch = useDispatch()
  // const full = useSelector(state => state.full)

  const openFullScreen = () => {
    const html = document.documentElement
    if (!full) {
      html.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
    setFull(!full)
    // dispatch({
    //   type: FULLSCREEN_TOGGLE
    // })
  }

  return (
    <HeaderContainer>
      <FullscreenText onClick={openFullScreen}>
        {full ? 'exit full screen' : 'full screen'}
      </FullscreenText>
    </HeaderContainer>
  )
}

export default Header
