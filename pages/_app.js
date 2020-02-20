import React from 'react'
import { GlobalStyle } from '../reset.css.js'

const _app = ({ Component }) => {
  return (
    <>
      <GlobalStyle />

      <Component />
    </>
  )
}

export default _app
