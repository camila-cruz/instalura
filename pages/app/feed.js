/* eslint-disable react/prop-types */
import React from 'react';
import FeedScreen from '../../src/components/screens/app/FeedScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';

function FeedPage({ user }) {
  // <pre>
  //   {dados.loading && 'Carregando...'}
  //   {!dados.loading && dados.data && 'Carregou com sucesso'}
  //   {!dados.loading && dados.error}
  //   {JSON.stringify(user, null, 4)}
  // </pre>

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FeedScreen user={user} />;
}

export default websitePageHOC(FeedPage, {
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
