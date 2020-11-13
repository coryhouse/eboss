/// <reference types="cypress" />

context("details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/details/1");
  });

  it("should display a list of docs", () => {
    cy.findByRole("heading", { name: "Details for Cory" });
    cy.findByText("Content here");
    cy.findByText("Content 2 here");
    cy.findByText("Content 3 here");
  });

  it("should change the button color and save the vote when a vote button is clicked", () => {
    cy.findByRole("button", { name: "Score Cory as a 6" }).click();
  });
});
