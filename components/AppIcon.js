import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const AppIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #ddd;
  border-radius: 15%;
  background: #f5f6f7;
  color: #666;

  &:active {
    box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px white inset;
  }

  & > div {
    font-family: escore9;
    font-size: 12px;
  }
`

const AppIcon = ({ name }) => {
  const url = `/${name}`
  const str = String(name).toUpperCase()
  // console.log(str)
  return (
    <Link href={url}>
      <a style={{ textDecoration: 'none' }}>
        <AppIconContainer>
          <div>{str}</div>
        </AppIconContainer>
      </a>
    </Link>
  )
}

export default AppIcon
