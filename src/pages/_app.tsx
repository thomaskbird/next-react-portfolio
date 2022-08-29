import React from 'react'
import { AppProps } from 'next/app'

import Navbar from '../components/Navbar'
import Footer from '~/components/Footer'

import '../styles/index.scss'

const COMPONENT_NAME = 'App';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className={`${COMPONENT_NAME}`}>
    <Navbar />

    <div className="page-content container">
      <Component {...pageProps} />
    </div>

    <Footer />
  </div>
)

export default App
