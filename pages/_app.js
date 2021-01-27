import { GlobalStyle, Theme } from '../src/styles/global'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
    </Head>
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
     </> 
  )
}