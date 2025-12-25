import PopularRoutes from './PopularRoutes';

describe('<PopularRoutes />', () => {
  it('renders title and route list', () => {
    cy.mountWithWrappers(<PopularRoutes />);
    cy.contains('h3', 'Популярне').should('be.visible');
    cy.contains('Ужгород').should('be.visible');
    cy.contains('Львів').should('be.visible');
    cy.contains('Київ').should('be.visible');
  });
});