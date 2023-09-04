import '../styles/app.css';
import '../styles/sassy.css';

import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Footer from '~/components/Footer'
import * as ReactGA from 'react-ga';

import { Provider } from 'react-redux';
import { appStore } from '~/redux/app-reducers'
import { themes } from '~/utils'
import Brand from '~/components/Brand'
import NavMain from '~/components/NavMain'
import { useRouter } from 'next/router'

interface CurrentThemeDataType {
  headerBackgroundColor: string;
  headerBorderColor: string;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [path, setPath] = useState('/');
  const [isTop, setIsTop] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0].slug);
  const [currentThemeData, setCurrentThemeData] = useState<undefined | CurrentThemeDataType>();

  const generateRandNum = (): number => Math.floor(Math.random() * (3 - 0 + 1)) + 0;

  const changeHeader = () => {
    const randNum = generateRandNum();

    const theme = themes[randNum];
    setCurrentThemeData({
      headerBackgroundColor: theme.backgroundColor,
      headerBorderColor: theme.borderColor,
    });
    setCurrentTheme(theme);
  }

  const setPageData = () => {
    setPath(router.pathname)
    ReactGA.pageview(path)
  }

  const handleAppScroll = (evt: any): void => {
    const scrollTop = evt.target.scrollTop;
    setIsTop(!(scrollTop > 50));
  }

  useEffect(() => {
    if (path !== router.pathname) {
      setPageData();
      changeHeader();
    }
  }, [router.pathname]);

  return (
    <Provider store={appStore}>
      <div className={`overall-wrapper ${currentTheme}`}>
        <div className={isTop ? 'header-wrap animate-height' : 'header-wrap animate-height hide'}>
          <div
            className="container-outer nav-public"
            style={{
              backgroundColor: currentThemeData?.headerBackgroundColor,
              borderColor: currentThemeData?.headerBorderColor,
            }}
          >
            <div className="container-inner">
              <div className="nav-public-left">
                <Brand/>
              </div>
              <div className={`nav-public-right ${isMobileNavOpen ? 'open' : ''}`}>
                <NavMain
                  onToggleMobileNav={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  onCloseMobileNav={() => setIsMobileNavOpen(false)}
                />
              </div>
            </div>
          </div>
          <div className="container-outer whats-new">
            <div className="container-inner">
              <b>Whats new:</b> Open to new contract remote roles!
            </div>
          </div>
        </div>

        <div
          className="container-outer main-page-content"
          onScroll={(evt) => handleAppScroll(evt)}
        >
          <Component {...pageProps} />
        </div>

        <Footer/>
      </div>
    </Provider>
  )
}

export default App
