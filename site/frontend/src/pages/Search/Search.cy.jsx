import Search from './Search'

describe('<Search />', () => {
  it('renders', () => {
    cy.mountWithWrappers(<Search />);
    cy.get('form').should('exist');
  })
  it('renders with params', () => {
    cy.mountWithWrappers(<Search />, {
      routerProps: {
        initialEntries: ['/search?from=Ужгород&to=Львів&date=2025-10-10']
      }
    });
    cy.get('input[value="Ужгород"]').should('exist');
  })
})