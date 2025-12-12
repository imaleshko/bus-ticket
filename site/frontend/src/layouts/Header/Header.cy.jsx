import Header from "./Header";
import { AuthContext } from "@/context/AuthContext.jsx";

describe("<Header />", () => {
  it("renders", () => {
    cy.mountWithWrappers(<Header />);
    cy.contains("a", "Головна").should("have.attr", "href", "/");
    cy.get('img[alt="logo"]').should("be.visible");
  });

  it("renders login buttons for guest users", () => {
    cy.mountWithWrappers(
      <AuthContext.Provider value={{ isAuth: false }}>
        <Header />
      </AuthContext.Provider>,
    );
    cy.contains("a", "Вхід")
      .should("be.visible")
      .and("have.attr", "href", "/login");
    cy.get('a[href="/accountinfo"]').should("not.exist");
  });

  it("renders user profile for authenticated users", () => {
    cy.mountWithWrappers(
      <AuthContext.Provider value={{ isAuth: true }}>
        <Header />
      </AuthContext.Provider>,
    );
    cy.get('a[href="/accountinfo"]').should("be.visible");
    cy.contains("a", "Вхід").should("not.exist");
  });
});
