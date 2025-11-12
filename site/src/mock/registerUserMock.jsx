export const registerUserMock = async (data) => {
  if (data.email === "q@w.e") {
    throw new Error("Користувач з таким email вже існує");
  }
  return {
    user: {
      id: "1",
      name: data.name,
      surname: data.surname,
      email: data.email,
      phone: data.phone,
    },
    token: "testToken",
  };
};
