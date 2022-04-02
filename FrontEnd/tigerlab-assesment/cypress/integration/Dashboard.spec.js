/// <reference types="cypress" />

describe("Dashboard Should Be Rendered Correctly", () => {
  it("NavBar Should Be Rendered Correctly", () => {
    cy.visit("http://localhost:3000/");
    cy.get("span").should("contain.text", "Inspector.");
    cy.get("span").should(
      "contain.text",
      "System Testing & Microservice Monitoring"
    );
    cy.get("a").should("have.attr", "href", "/");
    cy.get("svg").should("be.visible");
  });

  it("Dashboard Content Should Be Rendered Test Pulled From Backend", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h5").should("be.visible");
    cy.get("h5").should("have.class", "category");
    cy.get("div").should("have.class", "testcard");
  });

  it("Toast Message Should Appear When User Clicked On A Card", () => {
    cy.visit("http://localhost:3000/");
    cy.get(":nth-child(2) > .flex > :nth-child(1)").click();
    cy.get(".Toastify__toast-body").should("be.visible");
  });

  it("Test Perfromed Should Be Logged Into Local Storage", () => {
    cy.clearLocalStorage("test-history");
    cy.get(":nth-child(2) > .flex > :nth-child(1)")
      .click()
      .should(() => {
        expect(localStorage.getItem("test-history")).to.not.be.null;
      });
  });

  it("Clicking On History Icon Should Route To History Page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[href="/history"] > .mt-2').click();
    cy.get(".backtodashboardbtn").should("be.visible");
  });
});
