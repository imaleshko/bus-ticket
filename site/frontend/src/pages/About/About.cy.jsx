import About from './About'

describe('<About />', () => {
  it('renders', () => {
    cy.mount(<About />)
    cy.get('div').should('exist');
  })
})