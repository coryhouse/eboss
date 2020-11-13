/// <reference types="cypress" />

context("navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should be able to navigate between pages", () => {
    cy.findByText("Candidates").click();
    cy.url().should("contain", "/candidates");
    cy.findByText("Home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
