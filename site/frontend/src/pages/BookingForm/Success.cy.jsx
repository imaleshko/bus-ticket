import Success from './Success';

describe('<Success />', () => {
  it('renders success message', () => {
    cy.mountWithWrappers(<Success />);
    cy.contains('Успішно!').should('be.visible');
  });
});