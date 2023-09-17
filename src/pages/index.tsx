import { NextPage } from 'next'
import React, { useEffect } from 'react'
import ReactGA from 'react-ga';

const IndexView: NextPage = () => {
  useEffect(() => {
    ReactGA.initialize('UA-40542612-8');
  }, []);

  return <h1>Index View</h1>;
}

export default IndexView
