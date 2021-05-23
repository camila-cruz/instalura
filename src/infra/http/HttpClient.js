export async function HttpClient(url, { headers, body, ...options }) {
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
        if (respostaDoServidor.status === 204) {
          return { data: true };
        }
        return respostaDoServidor.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}
