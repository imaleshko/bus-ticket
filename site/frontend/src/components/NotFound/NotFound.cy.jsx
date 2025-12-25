import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('renders text and icon correctly', () => {
    cy.mount(<NotFound text={'Нічого не знайдено'} />);
    cy.contains('Нічого не знайдено').should('be.visible');
    cy.get('img').should('be.visible')
  });
});