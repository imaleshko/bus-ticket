describe("routes", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/auth/refresh", {
      statusCode: 401,
    }).as("refresh");
  });

  it("public and protected routes", () => {
    cy.visit("/");
    cy.wait("@refresh");
    cy.contains("зараз").should("be.visible");

    cy.contains("a", "Хто ми").click();
    cy.url().should("include", "/about");
    cy.contains("Хто ми").should("be.visible");

    cy.go("back");
    cy.contains("button", "Переглянути").click();
    cy.url().should("include", "/login");
    cy.contains("Увійти").should("be.visible");

    cy.visit("/accountinfo");
    cy.url().should("include", "/login");
  });
});
