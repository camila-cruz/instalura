/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login', () => {
  describe('when fill and submit a form login request', () => {
    // it é o teste que estamos fazendo
    it('goes to the feed page', () => {
      /* Pré-teste */
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');

      /* Cenário */
      const loginScreen = new LoginScreenPageObject(cy);

      loginScreen
        .fillLoginForm({ user: 'camilacruz', password: 'senhasegura' })
        .submitLoginForm();

      /* Asserções */
      // O que esperamos? Ir para /app/profile
      cy.url().should('include', '/app/feed');

      // Temos o token?
      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;

          cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token); // Token do cookie é igual ao token do server?
        });
    });
  });
});
