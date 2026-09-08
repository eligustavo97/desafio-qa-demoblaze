import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

When("informo dados válidos para um novo usuário", () => {
  const randomUser = `user_${Date.now()}`;
  HomePage.openSignUp();
  HomePage.fillSignUp(randomUser, "senha123");
  HomePage.submitSignUp();
});

Then("o sistema deve exibir uma mensagem de confirmação de cadastro", () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Sign up successful.');
  });
});

When("tento cadastrar um usuário que já existe", () => {
  HomePage.openSignUp();
  HomePage.fillSignUp("usuario_existente", "123456");
  HomePage.submitSignUp();
});

Then("o sistema deve exibir um alerta informando que o usuário já existe", () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('This user already exist.');
  });
});