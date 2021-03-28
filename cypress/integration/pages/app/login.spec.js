/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login', () => {
  // it é o teste que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
      .as('userLogin');

    const loginScreen = new LoginScreenPageObject(cy);

    loginScreen
      .fillLoginForm({ user: 'camilacruz', password: 'senhasegura' })
      .submitLoginForm();

    // Vai até esta página
    cy.visit('/app/login');

    // O que esperamos? Ir para /app/profile
    cy.url().should('include', '/app/profile');

    // Temos o token?
    cy.wait('@userLogin')
      .then((intercept) => {
        const { token } = intercept.response.body.data;

        cy.getCookie('APP_TOKEN')
          .should('exist')
          .should('have.property', 'value', token); // Token do cookie é igual ao token do server?
      });
  });
});
