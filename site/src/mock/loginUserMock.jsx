const testUser = {
  "name": "testUser",
  "surname": "testUserSurname",
  "email": "user@test.com",
  "phone": "+380685557777",
  "password": "dertyhgftyujbtq72684",
  "id": "1234"
}

export const loginUserMock = async (data) => {
  if (data.email !== testUser.email || data.password !== testUser.password) {
    throw new Error("Пошта або пароль неправильні");
  }
  return {
    user: {
      id: testUser.id,
      name: testUser.name,
      surname: testUser.surname,
      email: testUser.email,
      phone: testUser.phone,
    },
    token: "testToken",
  };
}