import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [navbarActivated, activateNavbar] = useState(true);
  pageProps = {...pageProps, activateNavbar};
  return <>
            {navbarActivated && <Navbar/>}
            <Component {...pageProps} />
          </>
}

export default MyApp
