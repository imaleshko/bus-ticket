import Layout from './Layout';

describe('<Layout />', () => {
  it('renders layout structure correctly', () => {
    cy.mountWithWrappers(<Layout />);
    cy.get('main').should('exist');
    cy.get('header').should('exist');
    cy.get('footer').should('exist');
  });
});