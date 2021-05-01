/* eslint-disable react/prop-types */
import React from 'react';
import UserScreen from '../../../src/components/screens/app/UserScreen';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../../src/services/auth/authService';
import { userService } from '../../../src/services/user/userService';

function ActiveUserProfilePage({ userInfo, posts }) {
  return <UserScreen userInfo={userInfo} posts={posts} />;
}

export default websitePageHOC(ActiveUserProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Seu perfil',
    },
  },
});

export async function getServerSideProps(ctx) {
  // const { id } = params;
  const user = await authService(ctx).getSession();
  const dados = await userService.getProfilePage(ctx);

  const posts = dados.posts.filter((post) => post.user === user.id);
  const { userInfo } = dados;

  return {
    props: {
      userInfo,
      posts,
    },
  };
}
