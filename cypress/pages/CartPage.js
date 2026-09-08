class CartPage {
  elements = {
    tableRows: () => cy.get('#tbodyid tr'),
    deleteBtn: (productName) => cy.contains('td', productName).parent().contains('a', 'Delete')
  };

  deleteItem(productName) {
    this.elements.deleteBtn(productName).click();
    cy.wait(1000);
  }

  validateItemAbsent(productName) {
    cy.contains('td', productName).should('not.exist');
  }

  validateItemsCount(count) {
    this.elements.tableRows().should('have.length', count);
  }
}

export default new CartPage();