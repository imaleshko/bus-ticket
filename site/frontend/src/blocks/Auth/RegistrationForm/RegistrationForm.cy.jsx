import RegistrationForm from "./RegistrationForm";

describe("<RegistrationForm />", () => {
  it("shows validation errors for invalid input", () => {
    cy.mountWithWrappers(<RegistrationForm />);
    cy.get('input[name="name"]').type("test");
    cy.get('input[name="surname"]').type("testtt");
    cy.get('input[name="email"]').type("user@test.com");
    cy.get('input[name="phone"]').type("2345678924");
    cy.get('input[name="password"]').type("123");
    cy.get('input[name="confirmPassword"]').type("000");
    cy.get('button[type="submit"]').click();
    cy.contains("Пароль має бути не менше 8 символів").should("be.visible");
    cy.contains("Паролі не співпадають").should("be.visible");
    cy.contains("Ви повинні погодитись з умовами користування").should(
      "be.visible",
    );
  });

  it("submits valid data", () => {
    cy.intercept("POST", "**/api/auth/register", {
      statusCode: 200,
    }).as("registerRequest");

    cy.mountWithWrappers(<RegistrationForm />);
    cy.get('input[name="name"]').type("test");
    cy.get('input[name="surname"]').type("testtt");
    cy.get('input[name="email"]').type("user@test.com");
    cy.get('input[name="phone"]').type("2345678924");
    cy.get('input[name="password"]').type("vdgsgsgg");
    cy.get('input[name="confirmPassword"]').type("vdgsgsgg");
    cy.get('input[name="terms"]').check();
    cy.get('button[type="submit"]').click();

    cy.wait("@registerRequest").its("request.body").should("deep.include", {
      name: "test",
      email: "user@test.com",
      password: "vdgsgsgg",
    });
  });

  it("displays server error message", () => {
    cy.intercept("POST", "**/api/auth/register", {
      statusCode: 400,
      body: { message: "Ця пошта вже використовується" },
    }).as("registerFail");

    cy.mountWithWrappers(<RegistrationForm />);

    cy.get('input[name="name"]').type("test");
    cy.get('input[name="surname"]').type("testtt");
    cy.get('input[name="email"]').type("user@test.com");
    cy.get('input[name="phone"]').type("2345678924");
    cy.get('input[name="password"]').type("vdgsgsgg");
    cy.get('input[name="confirmPassword"]').type("vdgsgsgg");
    cy.get('input[name="terms"]').check();
    cy.get('button[type="submit"]').click();

    cy.wait("@registerFail");

    cy.contains("Ця пошта вже використовується").should("be.visible");
  });
});
