import useRoutes from './useRoutes';

const TestRoutes = ({ from, to }) => {
  const routes = useRoutes(from, to);

  return (
    <div>
      <span data-testid="count">{routes.length}</span>
      <ul>
        {routes.map(r => (
          <li key={r.routeId}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
};

describe('useRoutes Hook', () => {
  it('fetches routes with params correctly', () => {
    const fromCity = "Ужгород";
    const toCity = "Львів";

    const mockData = [
      { routeId: 1, name: 'Маршрут 1' },
      { routeId: 2, name: 'Маршрут 2' }
    ];

    cy.intercept('GET', '**/api/routes*', {
      statusCode: 200,
      body: mockData
    }).as('getRoutes');

    cy.mountWithWrappers(<TestRoutes from={fromCity} to={toCity} />);

    const encodedFrom = encodeURIComponent(fromCity);

    cy.wait('@getRoutes').its('request.url').should('include', encodedFrom);

    cy.get('[data-testid="count"]').should('have.text', '2');
    cy.contains('Маршрут 1').should('exist');
  });

  it('returns empty array if params are missing', () => {
    cy.mountWithWrappers(<TestRoutes from="" to="" />);
    cy.get('[data-testid="count"]').should('have.text', '0');
  });
});