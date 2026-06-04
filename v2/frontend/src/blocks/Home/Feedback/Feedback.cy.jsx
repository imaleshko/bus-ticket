import Feedback from "./Feedback";

describe("<Feedback />", () => {
  it("renders text and stars", () => {
    cy.mount(<Feedback />);
    cy.contains("Залишайте та переглядайте відгуки").should("be.visible");
    cy.get("svg").should("have.length", 3);
  });
});
