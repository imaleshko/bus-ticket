import SeatChoose from './SeatChoose';
import styles from './SeatChoise.module.css';

describe('<SeatChoose />', () => {
  it('renders seats', () => {
    cy.mount(
      <SeatChoose
        totalSeats={20}
        selectedSeats={[]}
        bookingSeats={[]}
      />
    );

    cy.get('button').should('have.length', 20);
  });
  it('handles clicks on available seats', () => {
    const onClickSpy = cy.spy().as('handleClick');
    cy.mount(
      <SeatChoose
        totalSeats={20}
        selectedSeats={[]}
        handleSeatClick={onClickSpy}
      />
    );
    cy.contains('button', '5').click();

    cy.get('@handleClick').should('have.been.calledWith', 5);
  });

  it('renders booked seats that booked', () => {
    const bookedSeats = [1, 5];

    cy.mount(
      <SeatChoose
        totalSeats={20}
        bookingSeats={bookedSeats}
        selectedSeats={[]}
      />
    );

    cy.contains('button', '1').should('be.disabled')
    cy.contains('button', '2').should('not.be.disabled');
  });

  it('renders selected seats', () => {
    const selectedSeats = [3];

    cy.mount(
      <SeatChoose
        totalSeats={20}
        selectedSeats={selectedSeats}
      />
    );
    cy.contains('button', '3').should('have.class', styles.selected);
  });

});