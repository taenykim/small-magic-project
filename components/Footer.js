import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.85);
  border-radius: 8px 8px 0px 0px;
`

const Docker = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
  & > div {
    width: 40px;
    height: 40px;
    background: dodgerblue;
    border-radius: 4px;
    margin-right: 15px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Docker>
        <div></div>
        <div></div>
        <div></div>
      </Docker>
    </FooterContainer>
  )
}

export default Footer
