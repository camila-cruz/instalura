import React from 'react';
import { authService } from '../../src/services/auth/authService';
import { useUserService } from '../../src/services/user/hook';

export default function ProfilePage(props) {
  const dados = useUserService.getProfilePage();

  return (
    <div>
      <pre>
        {dados.loading && 'Carregando...'}
        {!dados.loading && dados.data && 'Carregou com sucesso'}
        {!dados.loading && dados.error}
        {JSON.stringify(props, null, 4)}
      </pre>
      Página de Profile!
      <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" />
    </div>
  );
}

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
