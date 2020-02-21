import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const AppIconContainer = styled.div`
  width: 100px;
  height: 100px;
  background: black;
  border-radius: 25%;
`

const AppIcon = () => {
  return (
    <Link href="/calculator">
      <a>
        <AppIconContainer></AppIconContainer>
      </a>
    </Link>
  )
}

export default AppIcon
