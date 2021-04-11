import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import { LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';

export function authService(ctx) {
  const cookies = parseCookies(ctx);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];

  return {
    async hasActiveSession() {
      return true;
    },
    async getSession() {
      const session = jwt.decode(token);
      return session.user;
    },
  };
}
