import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
  // Back-end de DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Back-end de PROD
  : 'https://instalura-api-omariosouto.vercel.app';

export const userService = {
  async getProfilePage(ctx, HttpClientModule = HttpClient, parseCookiesModule) {
    try {
      const url = `${BASE_URL}/api/users/posts`;
      const token = await authService(ctx, parseCookiesModule).getToken();

      if (!token) return {};

      const response = await HttpClientModule(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        userInfo: {
          bio: 'A wholesome person responsible for the best movies ever.',
          totalPosts: 234,
          totalFollowing: 22000,
          totalFollowers: 134000,
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os dados');
    }
  },
};
