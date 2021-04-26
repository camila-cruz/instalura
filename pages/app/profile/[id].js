/* eslint-disable react/prop-types */
import React from 'react';
import UserScreen from '../../../src/components/screens/app/UserScreen';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';

function ProfileUserPage() {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <UserScreen />;
}

export default websitePageHOC(ProfileUserPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perfil',
    },
  },
});
