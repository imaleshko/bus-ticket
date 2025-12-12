import { AuthProvider, useAuth } from "./AuthContext";

const TestConsumer = () => {
  const { user, isAuth, loginContext, logoutContext } = useAuth();
  return (
    <div>
      <div data-testid="status">{isAuth ? "LoggedIn" : "LoggedOut"}</div>
      <div data-testid="username">{user ? user.name : "NoUser"}</div>

      <button
        id="login-btn"
        onClick={() =>
          loginContext({
            user: {
              name: "TestUser",
              email: "test@test.com",
            },
          })
        }
      >
        Login
      </button>

      <button id="logout-btn" onClick={logoutContext}>
        Logout
      </button>
    </div>
  );
};

describe("AuthContext", () => {
  it("updates state and localStorage on login/logout", () => {
    cy.mount(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    cy.get('[data-testid="status"]').should("have.text", "LoggedOut");
    cy.get('[data-testid="username"]').should("have.text", "NoUser");

    cy.get("#login-btn").click();

    cy.get('[data-testid="status"]').should("have.text", "LoggedIn");
    cy.get('[data-testid="username"]').should("have.text", "TestUser");

    cy.window().then((window) => {
      const storedUser = JSON.parse(window.localStorage.getItem("user"));
      expect(storedUser.name).to.equal("TestUser");
    });

    cy.get("#logout-btn").click();

    cy.get('[data-testid="status"]').should("have.text", "LoggedOut");
    cy.window().then((window) => {
      expect(window.localStorage.getItem("user")).to.be.null;
    });
  });

  it("initializes from localStorage if data exists", () => {
    const fakeUser = { name: "RestoredUser" };
    localStorage.setItem("user", JSON.stringify(fakeUser));

    cy.mount(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    cy.get('[data-testid="status"]').should("have.text", "LoggedIn");
    cy.get('[data-testid="username"]').should("have.text", "RestoredUser");
  });
});
