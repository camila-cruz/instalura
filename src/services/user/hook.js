import { useEffect, useState } from 'react';
import { userService } from './userService';

export const useUserService = {
  getProfilePage() {
    const [response, setResponse] = useState({
      data: null,
      loading: true,
      error: null,
    });

    useEffect(() => {
      userService.getProfilePage()
        .then((respostaDoServidor) => {
          setResponse((currentState) => ({
            ...currentState,
            data: respostaDoServidor,
            loading: false,
            error: null,
          }));
        })
        .catch((err) => {
          setResponse((currentState) => ({
            ...currentState,
            data: null,
            loading: false,
            error: err.message,
          }));
        });
    }, []);

    return response;
  },
};
