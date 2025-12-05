import SearchForm from './SearchForm';

describe('<SearchForm />', () => {

  it('initializes with values from props', () => {
    cy.mountWithWrappers(
      <SearchForm
        initialFrom="Ужгород"
        initialTo="Львів"
        initialDate="2025-12-31"
      />
    );
    cy.get('input[placeholder="Звідки"]').should('have.value', 'Ужгород');
    cy.get('input[placeholder="Куди"]').should('have.value', 'Львів');
    cy.get('input[type="date"]').should('have.value', '2025-12-31');
  });

  it('allows user to type and submit', () => {
    cy.mountWithWrappers(<SearchForm />);
    cy.get('input[placeholder="Звідки"]').type('Ужгород');
    cy.get('input[placeholder="Звідки"]').should('have.value', 'Ужгород');
    cy.contains('button', 'Шукати').click();
  });

});