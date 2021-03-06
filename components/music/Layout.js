import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'
import Sound from './Sound'

const musics = ['1Upbeat Ukulele.mp3', '2Instrumental.mp3', '3Inspiration.mp3']

const rainbow = keyframes`
0%{background-position:0% 82%}
50%{background-position:100% 19%}
100%{background-position:0% 82%}
`

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => {
    return props.playToggle
      ? 'linear-gradient(124deg,#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840,#1ddde8,#2b1de8,#dd00f3,#dd00f3);'
      : 'white'
  }}
  background-size: 1800% 1800%;
  animation: ${rainbow} 18s ease infinite;
`

const PlayButton = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  background: black;
  color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & > div {
    position: absolute;
    top: 30%;
    left: 50%;
    font-size: 11px;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  & > p {
    position: absolute;
    font-size: 28px;
    font-family: escore9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const SideButton = styled.div`
  position: absolute;
  left: ${(props) => {
    return props.position === 'left' ? '10%' : '90%'
  }};
  width: 30px;
  height: 160px;
  background: black;
  cursor: pointer;
`

const Layout = () => {
  const [myMusic, setMyMusic] = useState('')
  const [playToggle, setPlayToggle] = useState(false)
  useEffect(() => {
    setMyMusic(new Sound(musics[0]))
  }, [])

  useEffect(() => {
    playToggle && myMusic.play()
  }, [myMusic])

  const anotherMusicPlay = (direction) => {
    myMusic.stop()
    if (direction === 'left') {
      return setMyMusic(
        new Sound(musics[(musics.indexOf(myMusic.name) + musics.length - 1) % musics.length])
      )
    }
    if (direction === 'right') {
      return setMyMusic(new Sound(musics[(musics.indexOf(myMusic.name) + 1) % musics.length]))
    }
  }

  const playMusic = () => {
    !playToggle && myMusic.play()
    playToggle && myMusic.stop()
    setPlayToggle(!playToggle)
  }

  return (
    <BackgroundContainer className="musicBackground" playToggle={playToggle}>
      <ContentsMenubar name="music" />
      <audio preload="auto" controls="none" style={{ display: 'none' }}></audio>
      <SideButton position="left" onClick={() => anotherMusicPlay('left')} />
      <PlayButton onClick={playMusic}>
        <div>{myMusic.name}</div>
        <p>{!playToggle ? `PLAY` : `STOP`}</p>
      </PlayButton>
      <SideButton position="right" onClick={() => anotherMusicPlay('right')} />
    </BackgroundContainer>
  )
}

export default Layout
