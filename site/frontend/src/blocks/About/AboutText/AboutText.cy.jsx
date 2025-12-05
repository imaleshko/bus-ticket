import AboutText from './AboutText';

describe('<AboutText />', () => {
  it('renders static content and image', () => {
    cy.mount(<AboutText />);
    cy.contains('h1', 'Хто ми').should('be.visible');
    cy.get('img').should('be.visible')
    cy.get('ul').should('have.length', 2);
  });
});