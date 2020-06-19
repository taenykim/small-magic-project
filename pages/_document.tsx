import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";

interface Props {
  styleTags: any;
}

class _document extends Document<Props> {
  static getInitialProps({ renderPage }: { renderPage: any }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body style={{ fontFamily: "escore3" }}>
          <Main />
          <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=kzmvremi5d"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _document;
