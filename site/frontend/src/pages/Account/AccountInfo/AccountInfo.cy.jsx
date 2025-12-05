import AccountInfo from './AccountInfo';

describe('<AccountInfo />', () => {
  it('renders correctly', () => {
    cy.mountWithWrappers(<AccountInfo />);
    cy.get('div').should('exist');
  });
});