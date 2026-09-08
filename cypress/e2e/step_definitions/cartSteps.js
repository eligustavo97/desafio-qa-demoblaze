import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";

Given("que estou na página inicial da loja", () => {
  HomePage.visit();
});

When("adiciono um celular, um monitor e um computador ao carrinho", () => {
  cy.on('window:alert', () => true);

  HomePage.visit();
  HomePage.selectProduct("Samsung galaxy s6");
  ProductPage.addToCart();

  HomePage.visit();
  HomePage.selectProduct("Apple monitor 24");
  ProductPage.addToCart();

  HomePage.visit();
  HomePage.selectProduct("Sony vaio i5");
  ProductPage.addToCart();
});

When("navego até a tela do carrinho", () => {
  HomePage.goToCart();
});

When("removo o produto {string}", (productName) => {
  CartPage.deleteItem(productName);
});

When("atualizo a página", () => {
  cy.reload();
});

Then("o produto {string} não deve ser exibido na lista", (productName) => {
  CartPage.validateItemAbsent(productName);
});

Then("devem permanecer apenas os outros dois produtos selecionados", () => {
  CartPage.validateItemsCount(2);
});