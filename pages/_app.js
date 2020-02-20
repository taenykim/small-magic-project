import React from 'react'
import { Container } from 'next/app'
import { GlobalStyle } from '../reset.css.js'

const _app = ({ Component }) => {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Component />
      </Container>
    </>
  )
}

export default _app
