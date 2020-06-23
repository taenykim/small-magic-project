import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentsMenubar from "../ContentsMenubar";

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-family: escore8;
  z-index: 20;
  position: fixed;
  top: 70px;
  left: 10px;
  & > button {
    margin-bottom: 8px;
    width: 80px;
    cursor: pointer;
    border: 2px solid lightgrey;
    border-radius: 7px;
    color: white;
    background: dodgerblue;
    padding: 8px;
  }
  & > div {
    margin-left: -10px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    padding: 11px 11px 11px 0px;
    border-radius: 0px 3px 3px 0px;
    font-family: escore7;
    & > span {
      width: 80px;
      color: white;
      font-family: escore6;
      margin: 8px 0px 8px 0px;
      border-radius: 0px 3px 3px 0px;
      padding: 6px;
    }
  }
`;

const Layout = () => {
  let map = null;
  const week = new Date().getDay();
  const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
  const weekMask = ["누구나", "1,6년생", "2,7년생", "3,8년생", "4,9년생", "5,0년생", "누구나"];

  useEffect(() => {
    map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.5666805, 126.9784147),
      zoom: 10,
      mapTypeId: naver.maps.MapTypeId.NORMAL,
    });

    naver.maps.Event.addListener(map, "dragend", function (e) {
      const url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json";
      const query = `?lat=${map.getCenter().y}&lng=${map.getCenter().x}`;
      fetch(url + query)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json);
          const remain_stat = {
            plenty: "green",
            some: "orange",
            few: "red",
            empty: "black",
            break: "black",
          };
          for (let i = 0; i < json.count; i++) {
            var marker = new naver.maps.Marker({
              icon: {
                content: `<div style="font-size:10px; font-family:escore6; border:1px solid lightgrey; color:white; background:${
                  remain_stat[json.stores[i].remain_stat]
                }; border-radius:5px; padding:4px;">${json.stores[i].name}</div>`,
              },
              position: new naver.maps.LatLng(json.stores[i].lat, json.stores[i].lng),
              map: map,
            });
          }
        });
    });
  });

  const onSuccessGeolocation = (position) => {
    var location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);

    map.setCenter(location); // 얻은 좌표를 지도의 중심으로 설정합니다.
    map.setZoom(16); // 지도의 줌 레벨을 변경합니다.

    console.log("Coordinates: " + location.toString());
  };

  const onErrorGeolocation = () => {
    // 에러!!
  };

  const mylocationHandler = () => {
    if (navigator.geolocation) {
      /**
       * navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 사용 가능 합니다.
       * http://localhost 에서는 사용이 가능하며, 테스트 목적으로, Chrome 의 바로가기를 만들어서 아래와 같이 설정하면 접속은 가능합니다.
       * chrome.exe --unsafely-treat-insecure-origin-as-secure="http://example.com"
       */
      navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
    } else {
      // 에러
    }
  };

  return (
    <BackgroundContainer>
      <ContentsMenubar name="maskmap" />
      <Description>
        <button onClick={mylocationHandler}>내 위치</button>
        <div>
          <span style={{ textAlign: "center", color: "black", background: "rgba(255,255,255,0.7)" }}>
            <div style={{ fontSize: "20px", fontFamily: "escore8" }}>{weekArr[week]}요일</div>
            <div style={{ marginTop: "5px" }}>{weekMask[week]}</div>
          </span>
          <span style={{ background: "green" }}>100개이상</span>
          <span style={{ background: "orange" }}>30~100개</span>
          <span style={{ background: "red" }}>2~30개</span>
          <span style={{ background: "black" }}>없음</span>
        </div>
      </Description>
      <MapContainer id="map"></MapContainer>
    </BackgroundContainer>
  );
};

export default Layout;
