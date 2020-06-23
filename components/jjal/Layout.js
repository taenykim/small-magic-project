import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentsMenubar from "../ContentsMenubar";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const JJalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    margin-top: 10px;
    border: 2px solid pink;
    border-radius: 3px;
  }
  & > input {
    font-size: 12px;
    font-family: escore6;
    color: white;
    background: #555;
    padding-left: 10px;
    width: 220px;
    height: 30px;
    border-radius: 5px;
    border: 0px;
    width: 80vw;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 600px;
  }
  & > div {
    margin-bottom: 100px;
  }
`;

const JJalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 12px;
    font-family: escore7;
    color: #666;
    margin-bottom: 20px;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;

    & > label {
      font-size: 12px;
      font-family: escore6;
      color: purple;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 30px;
      box-sizing: border-box;
      box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
      border-radius: 5px;
      background: #f5f6f7;
      cursor: pointer;
      margin: 10px;
    }
    & > label:active {
      box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
    }
    & > a {
      font-size: 12px;
      font-family: escore6;
      color: orange;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 30px;
      box-sizing: border-box;
      box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
      border-radius: 5px;
      background: #f5f6f7;
      cursor: pointer;
      text-decoration: none;
      margin: 10px;
    }
    & > a:active {
      box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
    }
  }

  & > canvas {
    width: 90%;
  }
`;

const Layout = () => {
  const data = useSelector((state) => state.jjal);

  const [text, setText] = useState(data.text || "welcome to my page");
  const [imageOn, setImageOn] = useState(data.imageOn || "");
  const [imageOnWidth, setImageOnWidth] = useState(data.imageOnWidth || "");
  const [imageOnHeight, setImageOnHeight] = useState(data.imageOnHeight || "");
  const [downloadHref, setDownloadHref] = useState(data.downloadHref || "");
  const [textFontSize, setTextFontSize] = useState("20");

  useEffect(() => {
    var canvas = document.getElementById("imageCanvas");
    const ctx = canvas.getContext("2d");
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${textFontSize}px Gulim`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (imageOn) {
      ctx.drawImage(imageOn, 0, 0, imageOnWidth, imageOnHeight);
    } else {
      ctx.fillStyle = "dodgerblue";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.lineWidth = 5;
    ctx.strokeStyle = `black`;
    ctx.strokeText(text, canvas.width / 2, canvas.height - 40);
    ctx.fillStyle = `white`;
    ctx.fillText(text, canvas.width / 2, canvas.height - 40);

    const href = canvas.toDataURL();
    setDownloadHref(href);
  });

  const handleImage = (e) => {
    var canvas = document.getElementById("imageCanvas");
    var ctx = canvas.getContext("2d");
    var reader = new FileReader();
    reader.onload = (event) => {
      var img = new Image();
      img.onload = () => {
        let max_size = 1280,
          width = img.width,
          height = img.height;

        if (width > height) {
          if (width > max_size) {
            height *= max_size / width;
            width = max_size;
          }
        } else {
          if (height > max_size) {
            width *= max_size / height;
            height = max_size;
          }
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        setImageOnWidth(width);
        setImageOnHeight(height);
      };
      img.src = event.target.result;
      setImageOn(img);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <BackgroundContainer>
      <ContentsMenubar name="jjal" data={{ text, imageOn, imageOnWidth, imageOnHeight, downloadHref, textFontSize }} />
      <JJalContainer>
        <JJalForm>
          <p>이미지는 width 1280 이하로 리사이징 됩니다.</p>
          <div>
            <label htmlFor="imageLoader">이미지 업로드</label>
            <a href={downloadHref} download="jjalbang.png">
              짤방 다운로드
            </a>
          </div>
          <input type="file" id="imageLoader" name="imageLoader" hidden onChange={handleImage} />

          <canvas id="imageCanvas"></canvas>
        </JJalForm>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          value={text}
          placeholder="문구를 입력하세요"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginRight: "10px", fontFamily: "escore7", fontSize: "12px", color: "#555" }} htmlFor="textFontSize">
            글자 크기
          </label>

          <select
            id="textFontSize"
            onChange={(e) => {
              setTextFontSize(e.target.value);
            }}
          >
            <option value="20">20</option>
            <option value="28">28</option>
            <option value="36">36</option>
            <option value="44">44</option>
          </select>
        </div>
      </JJalContainer>
    </BackgroundContainer>
  );
};

export default Layout;
