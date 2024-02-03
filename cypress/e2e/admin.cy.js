const user = require('../fixtures/userLoginPassword.json');
const selector = require("../fixtures/selector.json");

describe('Admin login', () => {
beforeEach(() => {
        cy.visit('http://qamid.tmweb.ru/admin');
});

it('Log in with valid email and password', () => {
  cy.login(user.validEmail, user.validPassword);
  cy.get(selector.adminPage).should('have.text', 'Администраторррская');
});

it('Log in with invalid email and password', () => {
  cy.login(user.invalidEmail, user.validPassword);
  cy.contains("Ошибка авторизации!").should("be.visible");
});
});