import Footer from "./Footer";

describe("<Footer />", () => {
  beforeEach(() => {
    cy.mountWithWrappers(<Footer />);
  });
  it("renders navigation links with correct URLs", () => {
    cy.contains("a", "Головна").should("have.attr", "href", "/");
    cy.contains("a", "Умови користування").should("have.attr", "href", "/term");
  });

  it("displays phone correct", () => {
    cy.contains("+380683427613")
      .should("be.visible")
      .and("have.attr", "href", "tel:+380683427613");
  });

  it("renders social media icons", () => {
    cy.get('img[alt="Instagram"]').should("be.visible");
    cy.get('img[alt="TikTok"]').should("be.visible");
    cy.get('img[alt="YouTube"]').should("be.visible");
  });
});
