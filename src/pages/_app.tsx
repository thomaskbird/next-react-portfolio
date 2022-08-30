import React from 'react'
import '../styles/index.scss'
import { AppProps } from 'next/app'
import IconNavbar from '~/components/IconNavbar'
import Footer from '~/components/Footer'

import { Provider } from 'react-redux';
import { appStore } from '~/redux/app-reducers'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronUp,
  faChevronDown,
  faCircle,
  faHome,
  faBriefcase,
  faListAlt,
  faBook,
  faFile,
  faEnvelope,
  faPrint,
  faFilePdf,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faChevronDown,
  faChevronUp,
  faCircle,
  faHome,
  faBriefcase,
  faListAlt,
  faBook,
  faFile,
  faEnvelope,
  faPrint,
  faFilePdf,
  faChevronLeft,
  faChevronRight,
);

const COMPONENT_NAME = 'App';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={appStore}>
    <div className={`${COMPONENT_NAME}`}>

      <IconNavbar/>

      <div className="page-content container">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  </Provider>
)

export default App
