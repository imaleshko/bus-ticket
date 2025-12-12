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

  it("exit from account", () => {
    localStorage.setItem("user", JSON.stringify({ name: "TestUser" }));

    cy.mountWithWrappers(<AccountSidebar />);

    cy.contains("Вихід").click();
    cy.should(() => {
      expect(localStorage.getItem("user")).to.be.null;
    });
  });
});
