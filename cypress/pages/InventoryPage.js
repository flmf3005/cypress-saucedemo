class InventoryPage {
  elements = {
    productList: () => cy.get(".inventory_item"),
    productNames: () => cy.get(".inventory_item_name"),
    addToCartButtons: () => cy.get('[data-test^="add-to-cart"]'),
    cartBadge: () => cy.get(".shopping_cart_badge"),
    cartIcon: () => cy.get(".shopping_cart_link"),
    sortDropdown: () => cy.get(".product_sort_container"),
  };

  getProductByName(name) {
    return cy.contains(".inventory_item", name);
  }

  addProductToCartByName(name) {
    this.getProductByName(name).find('[data-test^="add-to-cart"]').click();
  }

  removeProductFromCartByName(name) {
    this.getProductByName(name).find('[data-test^="remove"]').click();
  }

  getCartBadgeCount() {
    return this.elements.cartBadge();
  }

  goToCart() {
    this.elements.cartIcon().click();
  }

  sortBy(option) {
    this.elements.sortDropdown().select(option);
  }

  getFirstProductName() {
    return this.elements.productNames().first();
  }
}

export default new InventoryPage();
