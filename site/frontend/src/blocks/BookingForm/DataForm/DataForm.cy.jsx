import DataForm from "./DataForm";

describe("<DataForm />", () => {
  it("shows NotFound", () => {
    cy.intercept("GET", "**/api/routes/*", {
      statusCode: 404,
      body: null,
    }).as("getMissingRoute");
    cy.mountWithWrappers(<DataForm />);
    cy.contains("Маршрут не знайдено").should("be.visible");
  });

  it("success ", () => {
    const routeId = "r1";
    const date = "2025-10-10";
    const seatNumber = 9;

    const mockRoute = {
      routeId: routeId,
      from: "Ужгород",
      to: "Київ",
      departureTime: "18:00",
      arrivalTime: "06:00",
      distance: 800,
      duration: 12,
      price: 1500,
      transport: "Mercedes Sprinter",
      totalSeats: 20,
    };

    cy.intercept("GET", `**/api/routes/${routeId}*`, {
      statusCode: 200,
      body: mockRoute,
    }).as("getRoute");

    cy.intercept("POST", "**/api/booking", {
      statusCode: 200,
      body: { status: "success" },
    }).as("createBooking");

    const user = {
      name: "Іван",
      surname: "М",
      email: "test@user.com",
      phone: "123544858432",
    };
    localStorage.setItem("user", JSON.stringify(user));

    cy.mountWithWrappers(<DataForm />, {
      routerProps: {
        initialEntries: [
          `/data?routeId=${routeId}&date=${date}&seat=${seatNumber}`,
        ],
      },
    });

    cy.wait("@getRoute");

    cy.get('input[name="name"]').should("have.value", "Іван");
    cy.get('input[name="email"]').should("have.value", "test@user.com");

    cy.contains("1500 грн").should("be.visible");
    cy.contains("До оплати").click();

    cy.wait("@createBooking")
      .its("request.body")
      .should("deep.include", {
        routeId: "r1",
        date: date,
        email: "test@user.com",
        seats: seatNumber,
      });
  });

  it("displays error message if booking fails", () => {
    const routeId = "100";
    cy.intercept("GET", `**/api/routes/${routeId}*`, {
      body: { routeId: 100, price: 100, from: "A", to: "B" },
    }).as("getRoute");

    cy.intercept("POST", "**/api/booking", {
      statusCode: 400,
      body: { message: "Місця вже зайняті" },
    }).as("bookingFail");

    cy.mountWithWrappers(<DataForm />, {
      routerProps: {
        initialEntries: [`/data?routeId=${routeId}&date=2025-10-10$seat=1`],
      },
    });

    cy.wait("@getRoute");

    cy.contains("До оплати").click();
    cy.wait("@bookingFail");

    cy.contains("Місця вже зайняті").should("be.visible");
  });
});
