import Head from 'next/head'
import Script from 'next/script'
import MainLayOut from '../src/components/Layout/Main-LayOut'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayOut>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </MainLayOut>
  )
}

export default MyApp
