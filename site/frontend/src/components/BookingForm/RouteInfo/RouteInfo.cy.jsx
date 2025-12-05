import RouteInfo from './RouteInfo';

describe('<RouteInfo />', () => {
  it('calculates total price and shows details', () => {
    const mockRoute = {
      duration: 4,
      price: 700,
      transport: 'Mercedes Sprinter',
      from: 'Ужгород',
      to: 'Львів',
      timeStart: '08:00',
      timeEnd: '12:00'
    };

    const count = 1;

    cy.mount(<RouteInfo route={mockRoute} ticketCount={count} />);
    cy.contains('Час в дорозі: 4').should('be.visible');
    cy.contains('Транспорт: Mercedes Sprinter').should('be.visible');
    cy.get('input').should('have.value', '1');
    cy.contains('700 грн').should('be.visible');
  });
});