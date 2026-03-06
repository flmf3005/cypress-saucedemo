import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Carrinho e Checkout", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(Cypress.env("username"), Cypress.env("password"));
    cy.url().should("include", "/inventory");
  });

  it("deve exibir produto adicionado no carrinho", () => {
    InventoryPage.addProductToCartByName("Sauce Labs Backpack");
    InventoryPage.goToCart();
    CartPage.getItemByName("Sauce Labs Backpack").should("be.visible");
  });

  it("deve remover produto direto pelo carrinho", () => {
    InventoryPage.addProductToCartByName("Sauce Labs Backpack");
    InventoryPage.goToCart();
    CartPage.removeItemByName("Sauce Labs Backpack");
    CartPage.elements.cartItems().should("not.exist");
  });

  it("deve voltar ao inventário pelo botão continue shopping", () => {
    InventoryPage.goToCart();
    CartPage.continueShopping();
    cy.url().should("include", "/inventory");
  });

  it("deve completar checkout com sucesso", () => {
    InventoryPage.addProductToCartByName("Sauce Labs Backpack");
    InventoryPage.goToCart();
    CartPage.proceedToCheckout();
    CheckoutPage.fillPersonalInfo("Fernando", "Silva", "01310-100");
    CheckoutPage.continue();
    CheckoutPage.getSummaryTotal().should("be.visible");
    CheckoutPage.finish();
    CheckoutPage.getConfirmationMessage().should(
      "have.text",
      "Thank you for your order!",
    );
  });

  it("deve exibir erro ao tentar prosseguir sem preencher dados", () => {
    InventoryPage.addProductToCartByName("Sauce Labs Backpack");
    InventoryPage.goToCart();
    CartPage.proceedToCheckout();
    CheckoutPage.continue();
    CheckoutPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "First Name is required");
  });
});
