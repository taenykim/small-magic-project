import React, { useEffect, useState } from 'react'
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
  width: 100%;
  height: 100%;
`

const MylocationButton = styled.button`
  font-family: escore8;
  z-index: 20;
  position: fixed;
  top: 70px;
  left: 10px;
  border: 2px solid lightgrey;
  border-radius: 7px;
  color: white;
  background: dodgerblue;
  padding: 8px;
`

const Layout = () => {
  var map
  const [mapObj, setMapObj] = useState('')

  useEffect(() => {
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.5666805, 126.9784147),
      zoom: 10,
      mapTypeId: naver.maps.MapTypeId.NORMAL
    })
  })

  const onSuccessGeolocation = position => {
    var location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude)

    map.setCenter(location) // 얻은 좌표를 지도의 중심으로 설정합니다.
    map.setZoom(16) // 지도의 줌 레벨을 변경합니다.

    console.log('Coordinates: ' + location.toString())
  }

  const onErrorGeolocation = () => {
    var center = map.getCenter()

    infowindow.setContent(
      '<div style="padding:20px;">' +
        '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
        'latitude: ' +
        center.lat() +
        '<br />longitude: ' +
        center.lng() +
        '</div>'
    )

    infowindow.open(map, center)
  }

  const mylocationHandler = () => {
    if (navigator.geolocation) {
      /**
       * navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 사용 가능 합니다.
       * http://localhost 에서는 사용이 가능하며, 테스트 목적으로, Chrome 의 바로가기를 만들어서 아래와 같이 설정하면 접속은 가능합니다.
       * chrome.exe --unsafely-treat-insecure-origin-as-secure="http://example.com"
       */
      navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation)
    } else {
      var center = map.getCenter()
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
      )
      infowindow.open(map, center)
    }
  }

  return (
    <BackgroundContainer>
      <ContentsMenubar name="maskmap" />
      <MylocationButton onClick={mylocationHandler}>내 위치</MylocationButton>
      <MapContainer id="map"></MapContainer>
    </BackgroundContainer>
  )
}

export default Layout
