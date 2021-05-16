import { userService } from './userService';

const fakeToken = 'fake-token';
const cookieName = 'LOGIN_COOKIE_APP_TOKEN';
const fakeCtx = {
  [cookieName]: fakeToken,
};
const user = 'Astrogilda';

const parseCookiesModule = jest.fn((ctx) => ctx);

async function HttpClientModule() {
  return {
    data: {
      user,
    },
  };
}

async function HttpClientModuleError() {
  throw new Error('Houston, we have a problem');
}

describe('userService', () => {
  describe('getProfilePage()', () => {
    describe('when there is no session', () => {
      test('no data is returned', async () => {
        const userServiceResponse = await userService
          .getProfilePage({}, HttpClientModule);

        expect(userServiceResponse).toEqual({});
      });
    });

    describe('when there is an active session', () => {
      test('the user data and the posts are returned', async () => {
        const userServiceResponse = await userService
          .getProfilePage(fakeCtx, HttpClientModule, parseCookiesModule);

        expect(userServiceResponse).toMatchObject({ userInfo: {}, posts: {} });
      });
    });

    describe('when an error happens', () => {
      test('it is thrown', async () => {
        await expect(userService
          .getProfilePage(fakeCtx, HttpClientModuleError, parseCookiesModule))
          .rejects
          .toThrowError('Não conseguimos pegar os dados');
      });
    });
  });
});
