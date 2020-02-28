import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const AppIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 15%;
  background: #f5f6f7;
  color: #666;
  margin-right: 10px;

  & > div {
    font-family: escore9;
    font-size: 20px;
  }
`

const DockerIcon = item => {
  const url = `/${item.item}`
  return (
    <Link href={url}>
      <a style={{ textDecoration: 'none' }}>
        <AppIconContainer>
          <div>{item.item[0].toUpperCase()}</div>
        </AppIconContainer>
      </a>
    </Link>
  )
}

export default DockerIcon
