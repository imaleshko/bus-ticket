import Data from "./Data";

describe("<Data />", () => {
  it("renders data form", () => {
    cy.mountWithWrappers(<Data />);
    cy.contains("Маршрут не знайдено").should("be.visible");
  });
});
