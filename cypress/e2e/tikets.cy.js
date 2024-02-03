const user = require("../fixtures/userLoginPassword.json");
const selector = require("../fixtures/selector.json");

it("Should book a ticket", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(user.validEmail, user.validPassword);
    cy.contains(selector.title1).should("be.visible");
    cy.contains(selector.title2).should("be.visible");
    cy.get('[draggable="true"][data-film-id="122"] > .conf-step__movie-title').should('have.text','Микки маус');
    cy.get('[data-film-id="122"] ').invoke('text').then((text) => {
    cy.visit('/');
    cy.get(selector.chosenDay).click();
    cy.get(selector.chosenTime).click();
    cy.contains(selector.session).should("be.visible");
    cy.get(selector.chosenPlace).click();
    cy.get(selector.pushButton).click();
    cy.contains(selector.bookingСode).should("be.visible");
    cy.get(selector.pushButton).click();
    cy.contains(selector.electronicTicket).should("be.visible");
});
})
