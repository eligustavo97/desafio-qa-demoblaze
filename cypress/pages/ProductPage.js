class ProductPage {
  elements = {
    btnAddToCart: () => cy.contains('a', 'Add to cart')
  };

  addToCart() {
    this.elements.btnAddToCart().click();
  }
}

export default new ProductPage();