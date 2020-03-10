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
  color: ${props => {
    if (props.name === 'calculator') return 'red'
    else if (props.name === 'graph') return 'blue'
    else if (props.name === 'crawling') return 'purple'
    else if (props.name === 'today') return 'orange'
    else if (props.name === 'jjal') return 'green'
    else return 'black'
  }};

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

  return (
    <Link href={url}>
      <a style={{ textDecoration: 'none' }}>
        <AppIconContainer name={name}>
          <div>{str}</div>
        </AppIconContainer>
      </a>
    </Link>
  )
}

export default AppIcon
