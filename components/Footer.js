import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import DockerIcon from './DockerIcon'

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
  overflow-x: scroll;
`

const Footer = () => {
  const { docker } = useSelector(state => state.wrapper)
  return (
    <FooterContainer>
      <Docker>
        {docker.map((item, i) => {
          return <DockerIcon key={i} item={item} />
        })}
      </Docker>
    </FooterContainer>
  )
}

export default Footer
