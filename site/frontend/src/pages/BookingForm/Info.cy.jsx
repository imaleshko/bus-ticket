import Info from './Info';

describe('<Info />', () => {
  it('renders info form', () => {
    cy.mountWithWrappers(<Info />);
    cy.contains('Маршрут не знайдено').should('be.visible');
  });
});