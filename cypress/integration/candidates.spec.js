/// <reference types="cypress" />

context("candidates", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/candidates");
  });

  it("should display a list of candidates and support navigating to details", () => {
    cy.findByText("Airman");
    cy.findByText("Cory").click();
    cy.url().should("eq", "http://localhost:3000/details/1");
  });
});
