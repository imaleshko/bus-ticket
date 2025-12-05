import RouteTimeline from './RouteTimeline';

describe('<RouteTimeline />', () => {
  it('renders correctly with given route data', () => {
    const mockRoute = {
      from: 'Ужгород',
      to: 'Львів',
      departureTime: '08:00',
      arrivalTime: '12:00'
    };

    cy.mount(<RouteTimeline route={mockRoute} />);

    cy.contains('Ужгород').should('be.visible');
    cy.contains('08:00').should('be.visible');
    cy.contains('12:00').should('be.visible');
  });
});