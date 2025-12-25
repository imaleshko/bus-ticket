import Registration from './Registration';

describe('<Registration />', () => {
  it('renders registration form', () => {
    cy.mountWithWrappers(<Registration />);

    // Аналогічно перевіряємо наявність інпутів
    cy.get('input').should('exist');
  });
});