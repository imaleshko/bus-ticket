describe("Registration and login", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/auth/refresh", {
      statusCode: 401,
    }).as("refresh");

    cy.intercept("POST", "**/auth/register", {
      statusCode: 200,
      body: {
        accessToken: "dsivhfjbdeuifjlkvjuihbijod",
        user: {
          name: "cypress",
          surname: "text",
          email: "text@cypress.test",
          phone: "+380564822586",
        },
      },
    }).as("register");

    cy.intercept("POST", "**/auth/login", {
      statusCode: 200,
      body: {
        accessToken: "dsivhfjbdeuifjlkvjuihbijod",
        user: {
          name: "cypress",
          surname: "text",
          email: "text@cypress.test",
          phone: "+380564822586",
        },
      },
    }).as("login");

    cy.intercept("POST", "**/auth/logout", {
      statusCode: 200,
      body: {},
    }).as("logout");

    cy.intercept("GET", "**/booking/userticket*", {
      statusCode: 200,
      body: [],
    }).as("getTickets");
  });

  it("registration", () => {
    cy.visit("/");
    cy.wait("@refresh");

    cy.contains("a", "Реєстрація").click();
    cy.url().should("include", "/registration");
    cy.contains("Реєстрація").should("be.visible");

    cy.get('input[name="name"]').type("cypress");
    cy.get('input[name="surname"]').type("text");
    cy.get('input[name="email"]').type("text@cypress.test");
    cy.get('input[name="phone"]').type("+380564822586");
    cy.get('input[name="password"]').type("gwghegheigig");
    cy.get('input[name="confirmPassword"]').type("gwghegheigig");
    cy.get('input[name="terms"]').check();
    cy.contains("button", "Зареєструватися").click();
    cy.wait("@register");

    cy.url().should("include", "/accountinfo");
    cy.contains("cypress").should("be.visible");
    cy.contains("+380564822586").should("be.visible");
    cy.contains("a", "Мої квитки").click();
    cy.wait("@getTickets");
    cy.contains("немає придбаних квитків").should("be.visible");
    cy.contains("a", "Вихід").click();

    cy.wait("@logout");
    cy.url().should("include", "/");
    cy.contains("Реєстрація").should("be.visible");
  });

  it("login", () => {
    cy.visit("/");
    cy.wait("@refresh");

    cy.contains("a", "Вхід").click();
    cy.url().should("include", "/login");
    cy.contains("Вхід").should("be.visible");
    cy.get('input[name="email"]').type("text@cypress.test");
    cy.get('input[name="password"]').type("gwghegheigig");
    cy.contains("button", "Увійти").click();
    cy.wait("@login");

    cy.url().should("include", "/accountinfo");
    cy.contains("cypress").should("be.visible");
    cy.contains("+380564822586").should("be.visible");
    cy.contains("a", "Мої квитки").click();
    cy.wait("@getTickets");
    cy.contains("немає придбаних квитків").should("be.visible");
    cy.contains("a", "Вихід").click();

    cy.wait("@logout");
    cy.url().should("include", "/");
    cy.contains("Реєстрація").should("be.visible");
  });
});
