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

  & > div {
    font-family: escore9;
    font-size: 12px;
  }
`

const AppIcon = () => {
  return (
    <Link href="/calculator">
      <a style={{ textDecoration: 'none' }}>
        <AppIconContainer>
          <div>CALCULATOR</div>
        </AppIconContainer>
      </a>
    </Link>
  )
}

export default AppIcon
