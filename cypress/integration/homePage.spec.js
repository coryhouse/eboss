/// <reference types="cypress" />

context("homePage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the Home header", () => {
    cy.findByRole("heading", { name: "Home" });
  });
});
