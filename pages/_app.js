import '../styles/globals.css'
import '../styles/layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

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
