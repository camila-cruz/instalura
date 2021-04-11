import { loginService } from './loginService';

const COOKIE_NAME = 'APP_TOKEN';
const token = 'fake-token';
const setCookieModule = jest.fn();
async function HttpClientModule() {
  return {
    data: {
      token,
    },
  };
}
async function HttpClientModuleError() {
  return {
    data: {},
    err: {
      message: 'Falha no login',
    },
  };
}

describe('loginService', () => {
  describe('login()', () => {
    describe('when a user attempts to log in', () => {
      describe('and succeeds', () => {
        test('its token is stored', async () => {
          const loginServiceResponse = await loginService.login({
            username: 'someusername',
            password: 'somepassword',
          }, setCookieModule, HttpClientModule);

          expect(setCookieModule).toHaveBeenCalledWith(
            null,
            COOKIE_NAME,
            token, {
              path: '/',
              maxAge: 60 * 60 * 24 * 7,
            },
          );

          expect(loginServiceResponse).toEqual({ token });
        });
      });

      describe('and fails', () => {
        test('an error is thrown', async () => {
          await expect(loginService.login({
            username: 'someusername',
            password: 'somepassword',
          }, setCookieModule, HttpClientModuleError))
            .rejects
            .toThrowError('Falha no login');
        });
      });
    });
  });

  describe('logout()', () => {
    describe('when a user attempts to log out', () => {
      test('its token is removed', async () => {
        const destroyCookieModule = jest.fn();
        await loginService.logout(null, destroyCookieModule);
        expect(destroyCookieModule).toHaveBeenCalledWith(null, COOKIE_NAME);
      });
    });
  });
});
