import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';

const BASE_URL = isStagingEnv
  // Back-end de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Back-end de PROD
  : 'https://instalura-api-omariosouto.vercel.app';

// const BASE_URL = 'https://instalura-api-git-master-omariosouto.vercel.app';

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';

export const loginService = {
  async login({ username, password }, setCookieModule = setCookie, HttpClientModule = HttpClient) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((respostaConvertida) => {
        const { token } = respostaConvertida.data;

        if (!token) throw new Error('Falha no login');

        const DAY_IN_SECONDS = 86400;

        setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
          path: '/', // Todas as pgs a partir da raiz têm acesso ao cookie
          maxAge: DAY_IN_SECONDS * 7, // maxAge sempre em segundos
        });
        return {
          token,
        };
      });
  },
  logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
  },
};
