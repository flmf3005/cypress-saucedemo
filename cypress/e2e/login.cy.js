import LoginPage from "../pages/LoginPage";

describe("Login", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("deve fazer login com sucesso com credenciais válidas", () => {
    LoginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory");
  });

  it("deve exibir erro ao usar credenciais inválidas", () => {
    LoginPage.login("usuario_invalido", "senha_invalida");
    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });

  it("deve exibir erro ao deixar usuário em branco", () => {
    LoginPage.login("", "secret_sauce");
    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Username is required");
  });

  it("deve exibir erro ao deixar senha em branco", () => {
    LoginPage.login("standard_user", "");
    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Password is required");
  });
});
