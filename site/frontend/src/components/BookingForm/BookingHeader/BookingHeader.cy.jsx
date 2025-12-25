import BookingHeader from "./BookingHeader";

describe("<BookingHeader />", () => {
  it("renders route and date correctly", () => {
    cy.mount(<BookingHeader from="Ужгород" to="Львів" date="2025-10-15" />);
    cy.contains("Ужгород-Львів").should("be.visible");
    cy.contains("2025-10-15").should("be.visible");
  });
});
