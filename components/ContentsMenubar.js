import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const ContentsMenubarContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 40px;
  top: 0;
  background: rgba(0, 0, 255, 0.3);
`

const ContentsMenubar = () => {
  return (
    <ContentsMenubarContainer>
      <Link href="/">
        <a>
          <div>홈</div>
        </a>
      </Link>
    </ContentsMenubarContainer>
  )
}

export default ContentsMenubar
