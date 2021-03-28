import { setCookie, destroyCookie } from 'nookies';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    })
    .then((respostaConvertida) => {
      const { token } = respostaConvertida.data;
      const DAY_IN_SECONDS = 86400;

      setCookie(null, 'APP_TOKEN', token, {
        path: '/', // Todas as pgs a partir da raiz têm acesso ao cookie
        maxAge: DAY_IN_SECONDS * 7, // maxAge sempre em segundos
      });
      return {
        token,
      };
    });
}

export const loginService = {
  async login({ username, password }) {
    return HttpClient('https://instalura-api-git-master-omariosouto.vercel.app/api/login', {
      method: 'POST',
      body: {
        username,
        password,
      },
    });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};
