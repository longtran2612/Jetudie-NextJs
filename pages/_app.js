import '../styles/globals.css'
import '../styles/layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </> 
}

export default MyApp
