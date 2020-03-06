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
  color: ${props => {
    if (props.name === 'calculator') return 'red'
    else if (props.name === 'graph') return 'blue'
    else if (props.name === 'crawling') return 'purple'
    else if (props.name === 'today') return 'orange'
    else return 'black'
  }};
  margin-right: 10px;

  & > div {
    font-family: escore9;
    font-size: 20px;
    text-shadow: 3px 3px #ccc;
  }
`

const DockerIcon = ({ item }) => {
  const url = `/${item}`
  return (
    <Link href={url}>
      <a style={{ textDecoration: 'none' }}>
        <AppIconContainer name={item}>
          <div>{item[0].toUpperCase()}</div>
        </AppIconContainer>
      </a>
    </Link>
  )
}

export default DockerIcon
