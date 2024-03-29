const selector = require("../../fixtures/selector.json");

describe("Start page", () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it("Should show correct title", () => {
      cy.get(selector.title).should('have.text', selector.title3);
    });

  it("Should show correct number of films", () => {
    cy.get(selector.film).should("have.length", 3);
  });

  it("Should show correct day of the week", () => {
    cy.get(selector.daysWeek).should("have.length", 7);
  });

  it("Should show correct first film title", () => {
     cy.get(selector.firstFilm).should('have.text', selector.filmTitle);
  });
})