import UserInfo from "./UserInfo";

describe("<UserInfo />", () => {
  it("render user data from context", () => {
    const mockUser = {
      name: "Іван",
      surname: "М",
      phone: "+380991234567",
      email: "testuser@gmail.com",
    };
    localStorage.setItem("user", JSON.stringify(mockUser));
    cy.mountWithWrappers(<UserInfo />);
    cy.contains(mockUser.name).should("be.visible");
    cy.contains(mockUser.surname).should("be.visible");
    cy.contains(mockUser.phone).should("be.visible");
    cy.contains(mockUser.email).should("be.visible");
  });
});
