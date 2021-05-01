/* eslint-disable react/prop-types */
import React from 'react';
import UserScreen from '../../../src/components/screens/app/UserScreen';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';
// import { userService } from '../../../src/services/user/userService';
// import { authService } from '../../../src/services/auth/authService';

// function OtherUsersProfilePage({ userInfo, posts }) {
function OtherUsersProfilePage() {
  return <UserScreen userInfo={{}} posts={{}} />;
}

export default websitePageHOC(OtherUsersProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perfil',
    },
  },
});

// export async function getStaticProps({ params }) {
//   const { id } = params;
//   const dados = await userService.getProfilePage(null);

//   const posts = dados.posts.filter((post) => post.user === id);
//   const { userInfo } = dados;

//   return {
//     props: {
//       userInfo,
//       posts,
//     },
//   };
// }

// export async function getStaticPaths() {
//   // const auth = authService(null);

//   // // fetch nessa api
//   // // https://instalura-api-git-master-omariosouto.vercel.app/api/users

//   // const user = await auth.getSession();
//   // console.log('user', user);

//   return {
//     paths: [{
//       params: { id: '5fe9035f5bb019a3c62572da' },
//     }],
//     fallback: false,
//   };
// }
