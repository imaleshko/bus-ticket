import AccountTicket from './AccountTicket';

describe('<AccountTicket />', () => {
  it('displays ticket info correctly', () => {
    cy.mount(<AccountTicket from={"Ужгород"} to={"Львів"} date={"2025-12-12"} />);
    cy.contains(`${"Ужгород"} - ${"Львів"}`).should("be.visible");
    cy.contains("2025-12-12").should('be.visible');
    cy.contains('button', 'Переглянути').should('be.visible');
  });
});