import UserInfo from "./UserInfo";
import { AuthContext } from "@/context/AuthContext.jsx";

describe("<UserInfo />", () => {
  it("render user data from context", () => {
    const mockUser = {
      name: "Іван",
      surname: "М",
      phone: "+380991234567",
      email: "testuser@gmail.com",
    };
    const mockContext = {
      user: mockUser,
    }
    cy.mount(
      <AuthContext value={mockContext}>
        <UserInfo/>
      </AuthContext>
    )
    cy.contains(mockUser.name).should("be.visible");
    cy.contains(mockUser.surname).should("be.visible");
    cy.contains(mockUser.phone).should("be.visible");
    cy.contains(mockUser.email).should("be.visible");
  });
});
