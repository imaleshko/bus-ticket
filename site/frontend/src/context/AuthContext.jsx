import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    // user: {
    //   id: testUser.id,
    //   name: testUser.name,
    //   surname: testUser.surname,
    //   email: testUser.email,
    //   phone: testUser.phone,
    // },
    isAuth: false,
  });

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setAuth({
        user: JSON.parse(user),
        isAuth: true,
      });
    }
  }, []);

  const loginContext = ({ user }) => {
    setAuth({
      user: user,
      isAuth: true,
    });
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logoutContext = () => {
    setAuth({
      user: null,
      isAuth: false,
    });
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ ...auth, loginContext, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
