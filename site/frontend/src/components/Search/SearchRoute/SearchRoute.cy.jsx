import SearchRoute from './SearchRoute';

describe('<SearchRoute />', () => {
  const mockRoute = {
    from: 'Ужгород',
    to: 'Львів',
    departureTime: '08:00',
  };
  const mockDate = '2025-12-12';

  it('renders route details correctly', () => {
    cy.mountWithWrappers(<SearchRoute route={mockRoute} date={mockDate} />);
    cy.contains('Ужгород - Львів').should('be.visible');
    cy.contains('2025-12-12 08:00').should('be.visible');
  });

  it('handles booking click', () => {
    cy.mountWithWrappers(<SearchRoute route={mockRoute} date={mockDate} />);
    cy.contains('button', 'Забронювати').click();
  });
});