import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class _document extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }
  render() {
    return (
      <Html>
        <Head>
          <title>소마법프로젝트</title>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body style={{ fontFamily: 'escore3' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _document
