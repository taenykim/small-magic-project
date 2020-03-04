import React from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const CrawlingContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: auto;
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

const Layout = () => {
  return (
    <CrawlingContainer>
      <ContentsMenubar style={{ position: 'fixed', top: '0px', left: '0px' }} name="crawling" />
      <PageView>1/1</PageView>
    </CrawlingContainer>
  )
}

export default Layout
