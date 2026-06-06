import { createContext, useContext, useEffect, useState } from "react";
import api, { setAccessToken } from "@/api/axios.js";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    accessToken: "",
    user: null,
    isAuth: false,
    isLoading: true,
  });

  const loginContext = ({ accessToken, user }) => {
    setAuth({
      accessToken,
      user,
      isAuth: true,
      isLoading: false,
    });
    setAccessToken(accessToken);
  };

  const logoutContext = () => {
    setAuth({
      accessToken: "",
      user: null,
      isAuth: false,
    });
    setAccessToken("");
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("auth/refresh", {});
        setAuth({
          accessToken: response.data.accessToken,
          user: response.data.user,
          isAuth: true,
          isLoading: false,
        });
        setAccessToken(response.data.accessToken);
      } catch (error) {
        console.log(error);
        setAuth({
          accessToken: "",
          user: null,
          isAuth: false,
          isLoading: false,
        });
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ ...auth, loginContext, logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
