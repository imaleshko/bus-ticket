import AccountTickets from './AccountTickets';

describe('<AccountTickets />', () => {
  it('renders empty state by default', () => {
    cy.mountWithWrappers(<AccountTickets />);
    cy.contains('У вас поки немає придбаних квитків.')
      .should('be.visible');
  });
});