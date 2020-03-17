import React, { useEffect } from 'react'
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

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const Layout = () => {
  useEffect(() => {
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    }

    var map = new naver.maps.Map('map', mapOptions)
  })

  return (
    <BackgroundContainer>
      <ContentsMenubar name="maskmap" />
      <MapContainer id="map"></MapContainer>
    </BackgroundContainer>
  )
}

export default Layout
