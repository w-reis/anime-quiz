import { GlobalStyle, Theme } from '../src/styles/global'

export default function App({ Component, pageProps }) {
  return (
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
  )
}