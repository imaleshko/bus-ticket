import App from "./App";

describe("<App />", () => {
  it('renders Home page on "/', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mountWithWrappers(<App />);
    cy.get("main").should("exist");
    cy.contains("Головна").should("be.visible");
  });
  it('renders Login page on "/login"', () => {
    cy.mountWithWrappers(<App />, {
      routerProps: { initialEntries: ["/login"] },
    });
    cy.get("input[name=email]").should("exist");
  });
  it("renders PageNotFound on random page", () => {
    cy.mountWithWrappers(<App />, {
      routerProps: { initialEntries: ["/sggushgo"] },
    });
    cy.contains("сторінки не існує").should("exist");
  });
});
