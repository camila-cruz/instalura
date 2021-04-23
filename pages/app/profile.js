/* eslint-disable react/prop-types */
import React from 'react';
import ProfileScreen from '../../src/components/screens/app/ProfileScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';

import { useUserService } from '../../src/services/user/hook';

function ProfilePage({ user }) {
  const dados = useUserService.getProfilePage();

  // <pre>
  //   {dados.loading && 'Carregando...'}
  //   {!dados.loading && dados.data && 'Carregou com sucesso'}
  //   {!dados.loading && dados.error}
  //   {JSON.stringify(user, null, 4)}
  // </pre>

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ProfileScreen user={user.username} {...dados.data} />;
}

export default websitePageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Feed',
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    // const profilePage = await userService.getProfilePage(ctx);

    return {
      props: {
        user: {
          ...session,
          // ...profilePage.user,
        },
        // posts: profilePage,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();
  return {
    props: {},
  };
}
