class CheckoutPage {
  elements = {
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    confirmationMessage: () => cy.get(".complete-header"),
    errorMessage: () => cy.get('[data-test="error"]'),
    summaryTotal: () => cy.get(".summary_total_label"),
  };

  fillPersonalInfo(firstName, lastName, postalCode) {
    if (firstName) this.elements.firstNameInput().clear().type(firstName);
    if (lastName) this.elements.lastNameInput().clear().type(lastName);
    if (postalCode) this.elements.postalCodeInput().clear().type(postalCode);
  }

  continue() {
    this.elements.continueButton().click();
  }

  finish() {
    this.elements.finishButton().click();
  }

  getConfirmationMessage() {
    return this.elements.confirmationMessage();
  }

  getErrorMessage() {
    return this.elements.errorMessage();
  }

  getSummaryTotal() {
    return this.elements.summaryTotal();
  }
}

export default new CheckoutPage();
