import StarIcon from "./StarIcon";

describe("<StarIcon />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StarIcon />);
    cy.get("svg").should("be.visible");
  });
});
