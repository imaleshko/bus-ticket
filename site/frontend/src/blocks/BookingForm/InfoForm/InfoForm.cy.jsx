import InfoForm from './InfoForm';

describe('<InfoForm />', () => {
  it('renders NotFound if parameters are missing', () => {
    cy.mountWithWrappers(<InfoForm />);
    cy.contains('Маршрут не знайдено').should('be.visible');
  });

  it('render if all good', () => {
    const routeId = 'r12';
    const date = '2025-10-10';

    const mockRoute = {
      id: routeId,
      from: 'Ужгород',
      to: 'Київ',
      departureTime: "18:00",
      arrivalTime: "06:00",
      distance: 800,
      duration: 12,
      price: 1500,
      transport: "Mercedes Sprinter",
      totalSeats: 20
    };

    cy.intercept('GET', `**/api/routes/${routeId}*`, {
      statusCode: 200,
      body: mockRoute
    }).as('getRoute');

    cy.mountWithWrappers(<InfoForm />, {
      routerProps: {
        initialEntries: [`/info?routeId=${routeId}&date=${date}`]
      }
    });

    cy.wait('@getRoute');

    cy.contains('Ужгород').should('be.visible');
    cy.contains('button', '5').click();
    cy.contains('1500 грн').should('be.visible');
  });
});