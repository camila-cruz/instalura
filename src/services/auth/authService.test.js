import { authService } from './authService';

const fakeToken = 'fake-token';
const cookieName = 'LOGIN_COOKIE_APP_TOKEN';
const fakeCtx = {
  [cookieName]: fakeToken,
};
const parseCookiesModule = jest.fn((ctx) => ctx);

async function HttpClientModule(authenticated) {
  return {
    data: {
      authenticated,
    },
  };
}

async function HttpClientModuleWithoutAuthentication() {
  return {
    data: {},
  };
}

async function HttpClientModuleError() {
  return {
    err: {
      message: 'Houston, we have a problem',
    },
  };
}

describe('authService', () => {
  describe('getToken()', () => {
    describe('when a token is requested', () => {
      test('it is completely returned', async () => {
        const authServiceResponse = await authService(fakeCtx, parseCookiesModule)
          .getToken();

        expect(parseCookiesModule).toHaveBeenCalled();
        expect(authServiceResponse).toEqual(fakeToken);
      });
    });
  });

  describe('hasActiveSession()', () => {
    describe('when there is no token', () => {
      test('there cannot be an active session', async () => {
        const isAuthenticated = true;
        const authServiceResponse = await authService({}, parseCookiesModule)
          .hasActiveSession(() => HttpClientModule(isAuthenticated));

        expect(authServiceResponse).toBe(false);
      });
    });

    describe('when there is a user logged in', () => {
      test('there is an active session', async () => {
        const isAuthenticated = true;
        const authServiceResponse = await authService(fakeCtx, parseCookiesModule)
          .hasActiveSession(() => HttpClientModule(isAuthenticated));

        expect(authServiceResponse).toBe(true);
      });
    });

    describe('when there is not any user logged in', () => {
      test('there is no active session', async () => {
        const isAuthenticated = false;
        const authServiceResponse = await authService(fakeCtx, parseCookiesModule)
          .hasActiveSession(() => HttpClientModule(isAuthenticated));

        expect(authServiceResponse).toBe(false);
      });
    });

    describe('if there is no info about authentication', () => {
      test('it returns false', async () => {
        const authServiceResponse = await authService(fakeCtx, parseCookiesModule)
          .hasActiveSession(HttpClientModuleWithoutAuthentication);

        expect(authServiceResponse).toBe(false);
      });
    });

    describe('if an error happens at any time', () => {
      test('it returns false', async () => {
        const authServiceResponse = await authService(fakeCtx, parseCookiesModule)
          .hasActiveSession(HttpClientModuleError);

        expect(authServiceResponse).toBe(false);
      });
    });
  });
});
