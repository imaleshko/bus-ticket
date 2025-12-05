import LoginForm from './LoginForm';

describe('<LoginForm />', () => {

  it('renders login form elements', () => {
    cy.mountWithWrappers(<LoginForm />);
    cy.contains('h2', 'Авторизація').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.contains('a', 'Реєстрація').should('have.attr', 'href', '/registration');
  });

  it('submits form with correct data', () => {
    cy.intercept('POST', '**/api/auth/login', {
      statusCode: 200,
    }).as('loginRequest');

    cy.mountWithWrappers(<LoginForm />);

    cy.get('input[name="email"]').type('user@test.com');
    cy.get('input[name="password"]').type('123456789');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginRequest').its('request.body').should('deep.include', {
      email: 'user@test.com',
      password: '123456789'
    })
  });

  it('displays error message when login fails', () => {
    cy.intercept('POST', '**/api/auth/login', {
      statusCode: 400,
      body: { message: 'Неправильна пошта або пароль' }
    }).as('loginFail');

    cy.mountWithWrappers(<LoginForm />);
    cy.get('input[name="email"]').type('esggsgsg@test.com');
    cy.get('input[name="password"]').type('ahfsgzbgisogihxg');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginFail');
    cy.contains('Неправильна пошта або пароль').should('be.visible');
  });
});