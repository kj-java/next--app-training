import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css?family=Cabin|Herr+Von+Muellerhoff|Source+Sans+Pro:400,900&display=swap");
          /*Global styles*/
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --main-font: "Source Sans Pro", sans-serif;
            --secondary-font: "Herr Von Muellerhoff", cursive;
            --body-font: "Cabin", sans-serif;
            --main-font-color-dark: #252525;
            --secondary-font-color: #c59d5f;
            --body-font-color: #515151;
          }

          html {
            font-family: var(--body-font);
            font-size: 10px;
            color: var(--body-font-color);
            scroll-behavior: smooth;
          }

          section {
            padding: 3.9rem 0;
          }

          img {
            width: 100%;
            max-width: 100%;
          }

          a {
            text-decoration: none;
          }

          p {
            font-size: 1.6rem;
          }

          .app_container {
            width: 100%;
            max-width: 122.5rem;
            margin: 0 auto;
            padding: 0 2.4rem;
          }

          /* header */
          header {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
          }
        `}</style>
      </Container>
    );
  }
}

export default MyApp;
