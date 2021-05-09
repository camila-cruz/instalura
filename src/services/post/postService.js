import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
  // Back-end de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Back-end de PROD
  : 'https://instalura-api-omariosouto.vercel.app';

export const postService = {
  async post({ photoUrl, description, filter }) {
    const token = await authService(null).getToken();

    return HttpClient(`${BASE_URL}/api/posts`, {
      method: 'POST',
      body: {
        photoUrl,
        description,
        filter,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => console.log('postei uma fotinho'))
      .catch((err) => {
        throw new Error(err);
      });
  },
  async toggleLike({ postID }) {
    const token = await authService(null).getToken();

    return HttpClient(`${BASE_URL}/api/posts/${postID}/like`, {
      method: 'POST',
      body: {},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => {
        // Se for um like
        if (data) {
          return 1;
        }
        // Se for um dislike
        return -1;
      })
      .catch(() => -1);
  },
};
