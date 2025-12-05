import PageNotFound from './PageNotFound'

describe('<PageNotFound />', () => {
  it('renders', () => {
    cy.mount(<PageNotFound />)
    cy.contains('Такої сторінки не існує').should('be.visible');
  })
})