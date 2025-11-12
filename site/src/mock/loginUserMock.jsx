const testUser = {
  "name": "testUser",
  "email": "user@test.com",
  "password": "123456789",
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
      email: testUser.email,
    },
    token: "testToken",
  };
}