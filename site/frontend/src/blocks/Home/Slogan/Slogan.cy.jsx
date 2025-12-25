import Slogan from "./Slogan";

describe("<Slogan />", () => {
  it("renders slogan text", () => {
    cy.mount(<Slogan />);
    cy.contains("h1", "Починай свою подорож").should("be.visible");
  });
});
