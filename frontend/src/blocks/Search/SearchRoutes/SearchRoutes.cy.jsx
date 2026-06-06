import SearchRoutes from "./SearchRoutes";

describe("<SearchRoutes />", () => {
  it("renders list of routes when data is found", () => {
    const mockData = [
      {
        routeId: "r1",
        from: "Ужгород",
        to: "Львів",
        departureTime: "08:00",
        arrivalTime: "12:00",
        distance: 280,
        duration: 4,
        price: 700,
        transport: "Mercedes Sprinter",
        totalSeats: 20,
      },
      {
        routeId: "r2",
        from: "Ужгород",
        to: "Львів",
        departureTime: "10:00",
        arrivalTime: "14:00",
        distance: 280,
        duration: 4,
        price: 700,
        transport: "Mercedes Sprinter",
        totalSeats: 20,
      },
    ];

    cy.intercept("GET", "**/api/routes*", {
      statusCode: 200,
      body: mockData,
    }).as("getRoutes");

    cy.mountWithWrappers(
      <SearchRoutes from="Ужгород" to="Львів" date="2025-10-10" />,
    );

    cy.wait("@getRoutes");
    cy.contains("700 грн").should("be.visible");
    cy.contains("За вашим запитом нічого не знайдено").should("not.exist");
  });

  it("renders list of routes when data is not found", () => {
    cy.intercept("GET", "**/api/routes*", {
      statusCode: 200,
      body: [],
    }).as("getEmptyRoutes");

    cy.mountWithWrappers(
      <SearchRoutes from="Ужгород" to="Оіпргпшщі" date="2099-01-01" />,
    );

    cy.wait("@getEmptyRoutes");
    cy.contains("За вашим запитом нічого не знайдено").should("be.visible");
  });
});
