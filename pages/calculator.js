import React from 'react'
import Background from '../components/Background'
import ContentsMenubar from '../components/ContentsMenubar'
import Layout from '../components/calculator/Layout'

const calculator = () => {
  return (
    <Background>
      <ContentsMenubar></ContentsMenubar>
      <Layout />
    </Background>
  )
}

export default calculator
