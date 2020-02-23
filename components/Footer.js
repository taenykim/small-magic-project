import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
`

const Docker = styled.div``

const Footer = () => {
  return (
    <FooterContainer>
      <Docker></Docker>
    </FooterContainer>
  )
}

export default Footer
