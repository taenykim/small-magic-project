import React from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const CrawlingContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

const PageView = styled.div`
  font-family: 'escore9';
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100px;
  height: 30px;
  background: black;
  color: white;
  top: 40px;
  right: 0;
  z-index: 10;
`

const SearchingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  width: 80vw;
  height: 40px;
  border-radius: 20px;
  margin-top: 5%;
  background: rgba(0, 0, 0, 0.7);
`

const SearchIcon = styled.img`
  padding-left: 40px;
  width: 20px;
  height: 20px;
`

const SearchingForm = styled.form`
  padding-left: 40px;
  width: 100%;
`

const SearchingInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  font-family: 'escore9';
  color: white;
  font-size: 13px;

  &:focus {
    outline: none;
  }
`

const DescriptionContainer = styled.div`
  color: black;
  font-family: 'escore4';
  font-size: 10px;
  margin: 20px 10% 10px 10%;
  text-align: center;
  text-shadow: 1px 1px white;

  & > div {
    margin-bottom: 5px;
  }

  & > div:nth-child(3) {
    margin-top: 15px;
  }
`

const ButtonContainer = styled.div`
  color: #333;
  display: flex;

  & > div {
    font-family: 'escore6';
    background: none;
    border: 2px solid #333;
    padding: 4px;
    margin: 2px;
    cursor: pointer;
  }
`

const Layout = () => {
  return (
    <CrawlingContainer>
      <ContentsMenubar style={{ position: 'fixed', top: '0px', left: '0px' }} name="crawling" />
      <PageView>1/1</PageView>
      <SearchingContainer>
        <SearchIcon src="search_icon.png" />
        <SearchingForm>
          <SearchingInput
            autoFocus
            name="searching_name"
            type="text"
            placeholder="Enter the keyword to find"
          ></SearchingInput>
        </SearchingForm>
      </SearchingContainer>
      <DescriptionContainer>
        <div>
          데스크탑 이용 시,{' '}
          <span style={{ color: 'blue', fontFamily: 'escore7' }}>width가 1070 이상</span>이어야
          원활한 사용이 가능합니다.
        </div>
        <div>
          검색어는 <span style={{ color: 'red', fontFamily: 'escore7' }}>영어</span>로 입력하세요.
        </div>
        <div>
          FROM{' '}
          <a style={{ fontFamily: 'escore7' }} href="https://wall.alphacoders.com/" target="_blank">
            alphacoders.com
          </a>
        </div>
      </DescriptionContainer>
      <ButtonContainer>
        <div onClick={() => {}}>2개씩보기</div>
        <div onClick={() => {}}>4개씩보기</div>
        <div onClick={() => {}}>10개씩보기</div>
      </ButtonContainer>
    </CrawlingContainer>
  )
}

export default Layout
