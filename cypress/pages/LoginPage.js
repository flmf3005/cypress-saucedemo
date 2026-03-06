class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginButton: () => cy.get("#login-button"),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit("https://www.saucedemo.com");
  }

  fillUsername(username) {
    if (username) {
      this.elements.usernameInput().clear().type(username);
    }
  }

  fillPassword(password) {
    if (password) {
      this.elements.passwordInput().clear().type(password);
    }
  }

  submit() {
    this.elements.loginButton().click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  getErrorMessage() {
    return this.elements.errorMessage();
  }
}

export default new LoginPage();
