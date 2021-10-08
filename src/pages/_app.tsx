import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import Header from 'hocs/Header'

function App({ Component, pageProps }: AppProps) {
  const ComponentToRender = Header(Component)

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A pokedex app using TypeScript, React, NextJS and Styled Components"
        />
        <meta name="theme-color" content="#e4e4e4" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <ComponentToRender {...pageProps} />
    </>
  )
}

export default App
