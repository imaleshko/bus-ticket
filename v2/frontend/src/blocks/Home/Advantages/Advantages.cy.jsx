import Advantages from "./Advantages";

describe("<Advantages />", () => {
  it("renders all 5 advantage items", () => {
    cy.mount(<Advantages />);
    cy.contains("Зручні маршрути").should("be.visible");
    cy.contains("Онлайн бронювання").should("be.visible");
    cy.get("img").should("have.length", 5);
  });
});
