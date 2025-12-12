import { useLogin } from "./useLogin";

const TestLogin = () => {
  const { login, isSuccess, error } = useLogin();
  return (
    <div>
      <button onClick={() => login({ email: "test", password: "123" })}>
        Login
      </button>
      {isSuccess && <div data-testid="status">Success</div>}
      {error && <div data-testid="error">{error.message}</div>}
    </div>
  );
};

describe("useLogin Hook", () => {
  it("handles successful login", () => {
    cy.intercept("POST", "**/api/auth/login", {
      statusCode: 200,
      body: { user: { name: "User" } },
    }).as("loginRequest");

    cy.mountWithWrappers(<TestLogin />);

    cy.get("button").click();

    cy.wait("@loginRequest");
    cy.get('[data-testid="status"]').should("have.text", "Success");
  });

  it("login error", () => {
    cy.intercept("POST", "**/api/auth/login", {
      statusCode: 400,
      body: { message: "Неправильний пароль" },
    }).as("loginFail");

    cy.mountWithWrappers(<TestLogin />);
    cy.get("button").click();
    cy.wait("@loginFail");
    cy.get('[data-testid="error"]').should("have.text", "Неправильний пароль");
  });
});
