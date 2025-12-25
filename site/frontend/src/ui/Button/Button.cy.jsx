import Button from './Button'

describe('<Button />', () => {
  it('renders button', () => {
    const onClickSpy = cy.spy().as('handleClick');
    cy.mount(<Button onClick={onClickSpy}>Кнопка</Button>);
    cy.contains('Кнопка').click();
    cy.get('@handleClick').should('have.been.calledOnce');
  });
})