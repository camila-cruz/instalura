/// <reference types="cypress" />

//import { describe } from "mocha";

describe('/pages/app/login', () => {
  // it é o teste que estamos fazendo
  it('preencha os campos e vá para a página /app/profile', () => {
    // Vai até esta página
    cy.visit('/app/login');

    // Preencher o input de usuário
    cy.get('#formCadastro input[name="usuario"]').type('camilacruz');
    
    // Preencher o input de senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');
    
    // Clicar no botão de submit
    cy.get('#formCadastro button[type="submit"]').click();
    
    // O que esperamos? Ir para /app/profile
    cy.url().should('include', '/app/profile');
  });
});