import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe("Inventário", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory");
  });

  it("deve exibir a lista de produtos", () => {
    InventoryPage.elements.productList().should("have.length", 6);
  });

  it("deve adicionar um produto ao carrinho", () => {
    InventoryPage.addProductToCartByName("Sauce Labs Backpack");
    InventoryPage.getCartBadgeCount()
      .should("be.visible")
      .and("have.text", "1");
  });

  it("deve adicionar e remover um produto do carrinho", () => {
    InventoryPage.addProductToCartByName("Sauce Labs Backpack");
    InventoryPage.getCartBadgeCount().should("have.text", "1");

    InventoryPage.removeProductFromCartByName("Sauce Labs Backpack");
    InventoryPage.elements.cartBadge().should("not.exist");
  });

  it("deve adicionar múltiplos produtos ao carrinho", () => {
    InventoryPage.addProductToCartByName("Sauce Labs Backpack");
    InventoryPage.addProductToCartByName("Sauce Labs Bike Light");
    InventoryPage.getCartBadgeCount().should("have.text", "2");
  });

  it("deve ordenar produtos por nome Z-A", () => {
    InventoryPage.sortBy("za");
    InventoryPage.getFirstProductName().should(
      "have.text",
      "Test.allTheThings() T-Shirt (Red)",
    );
  });

  it("deve navegar para o carrinho ao clicar no ícone", () => {
    InventoryPage.addProductToCartByName("Sauce Labs Backpack");
    InventoryPage.goToCart();
    cy.url().should("include", "/cart");
  });
});
