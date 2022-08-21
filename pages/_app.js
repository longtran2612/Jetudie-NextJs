import '../styles/globals.css'
import '../styles/layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Navbar from 'components/narbar'
import 'components/narbar.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return <>
   <SessionProvider session={session}>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </SessionProvider>
  </> 
}

export default MyApp
