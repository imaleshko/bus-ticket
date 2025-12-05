import PopularRoute from './PopularRoute';

describe('<PopularRoute />', () => {
  const props = {
    from: 'Ужгород',
    to: 'Львів',
    frequency: 'Щоденно'
  };

  it('renders route info correctly', () => {
    cy.mountWithWrappers(<PopularRoute {...props} />);

    cy.contains('Ужгород - Львів').should('be.visible');
  });

  it('handles booking click when authenticated', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'Test User' }));
    const now = new Date('2025-10-10').getTime();
    cy.clock(now);
    cy.mountWithWrappers(<PopularRoute {...props} />);
    cy.contains('Переглянути').click();
  });
});