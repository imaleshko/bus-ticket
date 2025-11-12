export const registerUserMock = async (data) => {
  if (data.email === "q@w.e") {
    throw new Error("Користувач з таким email вже існує");
  }
  return {
    user: {
      id: "1",
      name: data.name,
      email: data.email,
    },
    token: "testToken",
  };
};
