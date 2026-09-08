class HomePage {
  elements = {
    btnSignUpModal: () => cy.get('#signin2'),
    inputUsername: () => cy.get('#sign-username'),
    inputPassword: () => cy.get('#sign-password'),
    btnRegister: () => cy.get('button[onclick="register()"]'),
    navCart: () => cy.get('#cartur'),
    categoryMonitors: () => cy.contains('a', 'Monitors'),
    categoryLaptops: () => cy.contains('a', 'Laptops'),
    categoryPhones: () => cy.contains('a', 'Phones'),
    linkProduct: (name) => cy.contains('.card-title a', name)
  };

  visit() {
    cy.visit('/');
  }

  openSignUp() {
    this.elements.btnSignUpModal().click();
  }

  fillSignUp(user, pass) {
    this.elements.inputUsername().invoke('val', user);
    this.elements.inputPassword().invoke('val', pass);
  }

  submitSignUp() {
    this.elements.btnRegister().click();
  }

  selectProduct(productName) {
    // Se for o monitor, filtra a categoria antes de clicar
    if (productName.includes("monitor") || productName.includes("Apple")) {
      this.elements.categoryMonitors().click();
      cy.wait(1000); // Aguarda renderizar os monitores
    } else if (productName.includes("Sony") || productName.includes("vaio")) {
      this.elements.categoryLaptops().click();
      cy.wait(1000);
    }
    
    this.elements.linkProduct(productName).click();
  }

  goToCart() {
    this.elements.navCart().click();
  }
}

export default new HomePage();