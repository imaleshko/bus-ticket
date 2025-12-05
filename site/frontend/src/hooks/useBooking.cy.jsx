import { useBooking } from './useBooking';

const TestComponent = () => {
  const { createBooking, isSuccess, isError, error } = useBooking();
  return (
    <div>
      <button onClick={() => createBooking({ routeId: 1 })}>
        Create Booking
      </button>

      {isSuccess && <span data-testid="status">Success</span>}
      {isError && <span data-testid="status">Error</span>}
      {error && <div data-testid="error-msg">{error.message}</div>}
    </div>
  );
};

describe('useBooking Hook', () => {

  it('handles successful booking', () => {
    cy.intercept('POST', '**/api/booking', {
      statusCode: 200,
      body: { status: 'ok' }
    }).as('bookingRequest');

    cy.mountWithWrappers(<TestComponent />);

    cy.contains('Create Booking').click();

    cy.wait('@bookingRequest');
    cy.get('[data-testid="status"]').should('have.text', 'Success');
  });

  it('handles API error correctly', () => {
    cy.intercept('POST', '**/api/booking', {
      statusCode: 400,
      body: { message: 'Місць немає' }
    }).as('bookingFail');

    cy.mountWithWrappers(<TestComponent />);
    cy.contains('Create Booking').click();

    cy.wait('@bookingFail');

    cy.get('[data-testid="status"]').should('have.text', 'Error');
    cy.get('[data-testid="error-msg"]').should('have.text', 'Місць немає');
  });
});