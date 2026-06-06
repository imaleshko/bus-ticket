import AccountSidebar from "./AccountSidebar";

describe("<AccountSidebar />", () => {
  it("renders all navigation links", () => {
    cy.mountWithWrappers(<AccountSidebar />);
    cy.contains("Вихід").should("be.visible");
  });

  it("renders witch accounttickets URL", () => {
    cy.mountWithWrappers(<AccountSidebar />, {
      routerProps: { initialEntries: ["/accounttickets"] },
    });

    cy.contains("Мої квитки").should("have.attr", "aria-current");
    cy.contains("Мої дані").should("not.have.attr", "aria-current");
  });
});
