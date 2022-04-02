/// <reference types="cypress" />

describe("History Should Be Rendered Correctly", () => {
  it("No Table Should Appear if LocalStorage Is Empty", () => {
    cy.visit("http://localhost:3000/history");
    cy.clearLocalStorage("test-history");
    cy.get("p").should("contain.text", "No Test Performed Yet...");
  });

  it("Table Should Appear if LocalStorage Consist Of Test History", () => {
    cy.clearLocalStorage("test-history");
    cy.visit("http://localhost:3000/history");
    cy.get(".backtodashboardbtn").should("be.visible").click();
    cy.get(":nth-child(2) > .flex > :nth-child(1)").click();
    cy.get('[href="/history"] > .mt-2').click();
    cy.get("table").should("be.visible");
  });
});
