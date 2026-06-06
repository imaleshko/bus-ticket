import Login from "./Login";

describe("<Login />", () => {
  it("renders login form", () => {
    cy.mountWithWrappers(<Login />);
    cy.get("input").should("exist");
  });
});
