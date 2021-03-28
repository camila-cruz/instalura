export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    // Vai até esta página
    this.cy.visit('/app/login');
  }

  fillLoginForm({ user, password }) {
    // Preencher o input de usuário
    this.cy.get('#formCadastro input[name="usuario"]').type(user);

    // Preencher o input de senha
    this.cy.get('#formCadastro input[name="senha"]').type(password);

    return this;
  }

  submitLoginForm() {
    // Clicar no botão de submit
    this.cy.get('#formCadastro button[type="submit"]').click();

    return this;
  }
}
