import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function LoginPage() {
  return <h1>Login</h1>;
}

export default websitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
