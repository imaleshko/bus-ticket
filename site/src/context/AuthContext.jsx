import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
    isAuth: false,
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (token && user) {
      setAuth({
        user: JSON.parse(user),
        token: token,
        isAuth: true,
      });
    }
  }, []);

  const loginContext = ({ user, token }) => {
    setAuth({
      user: user,
      token: token,
      isAuth: true,
    });
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logoutContext = () => {
    setAuth({
      user: null,
      token: null,
      isAuth: false,
    });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
