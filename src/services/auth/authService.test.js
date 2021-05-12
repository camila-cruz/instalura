import { authService } from './authService';

// getToken()
// hasActiveSession()
// getSession()

const fakeToken = 'fake-token';
const cookieName = 'LOGIN_COOKIE_APP_TOKEN';
const fakeCtx = {
  [cookieName]: fakeToken,
};
const parseCookiesModule = jest.fn(() => fakeCtx);

describe('authService', () => {
  describe('getToken()', () => {
    describe('when a token is requested', () => {
      test('it is completely returned', async () => {
        console.log(parseCookiesModule(fakeCtx));
        const authServiceResponse = await authService(fakeCtx, parseCookiesModule)
          .getToken();

        expect(parseCookiesModule).toHaveBeenCalled();
        expect(authServiceResponse).toEqual(fakeToken);
      });
    });
  });
});
