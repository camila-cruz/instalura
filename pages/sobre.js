import React from 'react';
import AboutScreen from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Sobre() {
  return <AboutScreen />;
}

export default websitePageHOC(Sobre);
