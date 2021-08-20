import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Whatsapp } from '../components/Whatsapp'


function MyApp({ Component, pageProps }: AppProps) {
  return (
     <>
     <Header />
     <Whatsapp/>
     <Component {...pageProps} />
    </>
    )
}
export default MyApp
