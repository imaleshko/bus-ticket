describe ('ticket purchase', () => {
  beforeEach(() => {
    cy.intercept("GET", "**/auth/refresh", {
      statusCode: 401,
    }).as("refresh");

    cy.intercept("POST", "**/auth/login").as("login");

    cy.intercept("GET", "**/routes*").as("getRoutes");
  })

  it("complete ticket purchase process", () => {
    cy.visit("/");
    cy.wait("@refresh");

    cy.contains("a", "Вхід").click();
    cy.url().should("include", "/login");
    cy.contains("Вхід").should("be.visible");
    cy.get('input[name="email"]').type("user@test.com");
    cy.get('input[name="password"]').type("123456789");
    cy.contains("button", "Увійти").click();
    cy.wait("@login");

    cy.contains("a", "Головна").click();
    cy.get('input[name="from"]').type("Ужгород");
    cy.get('input[name="to"]').type("Львів");
    cy.get('input[name="date"]').type("2025-12-28");
    cy.contains("Шукати").click();
    cy.wait("@getRoutes");

    cy.contains("700 грн").should("be.visible");
    cy.contains("Забронювати").click();

    cy.get('button[class*="seat"]:not(:disabled)').first().click();
    cy.contains('button', 'Продовжити').click();

    cy.contains("button", "До оплати").click();

    cy.contains('a', 'Ваші квитки').click();

    cy.contains('Ужгород - Львів').should('be.visible');
  })
})