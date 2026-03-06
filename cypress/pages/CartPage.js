class CartPage {
  elements = {
    cartItems: () => cy.get(".cart_item"),
    cartItemNames: () => cy.get(".inventory_item_name"),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
    removeButtons: () => cy.get('[data-test^="remove"]'),
  };

  getItemByName(name) {
    return cy.contains(".cart_item", name);
  }

  removeItemByName(name) {
    this.getItemByName(name).find('[data-test^="remove"]').click();
  }

  proceedToCheckout() {
    this.elements.checkoutButton().click();
  }

  continueShopping() {
    this.elements.continueShoppingButton().click();
  }
}

export default new CartPage();
