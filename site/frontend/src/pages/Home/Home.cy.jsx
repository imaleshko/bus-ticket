import Home from './Home';

describe('<Home />', () => {
  it('renders landing page with search form', () => {
    cy.mountWithWrappers(<Home />);
    cy.get('input').should('exist');
    cy.get('img').should('exist');
  });
});