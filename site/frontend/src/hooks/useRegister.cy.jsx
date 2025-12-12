import { useRegister } from "./useRegister";

const TestRegister = () => {
  const { register, isSuccess, error } = useRegister();

  return (
    <div>
      <button
        onClick={() =>
          register({
            email: "testuser@test.com",
            password: "123456789",
            name: "Іван",
          })
        }
      >
        Register
      </button>

      {isSuccess && <div data-testid="status">Success</div>}
      {error && <div data-testid="error">{error.message}</div>}
    </div>
  );
};

describe("useRegister Hook", () => {
  it("handles successful registration", () => {
    cy.intercept("POST", "**/api/auth/register", {
      statusCode: 200,
      body: {
        user: { id: 1, name: "Ivan", email: "newuser@test.com" },
      },
    }).as("registerRequest");

    cy.mountWithWrappers(<TestRegister />);

    cy.get("button").click();

    cy.wait("@registerRequest");
    cy.get('[data-testid="status"]').should("have.text", "Success");
  });

  it("handles existing user error", () => {
    cy.intercept("POST", "**/api/auth/register", {
      statusCode: 400,
      body: { message: "Користувач з таким email вже існує" },
    }).as("registerFail");

    cy.mountWithWrappers(<TestRegister />);
    cy.get("button").click();

    cy.wait("@registerFail");

    cy.get('[data-testid="error"]').should(
      "have.text",
      "Користувач з таким email вже існує",
    );
  });
});
