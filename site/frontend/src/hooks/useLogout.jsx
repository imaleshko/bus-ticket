import { useAuth } from "@/context/AuthContext.jsx";
import { useMutation } from "@tanstack/react-query";
import api, { setAccessToken } from "@/api/axios.js";

export const useLogout = () => {
  const { logoutContext } = useAuth();
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await api.post("auth/logout", {});
      return response.data;
    },
    onSuccess: () => {
      logoutContext();
      setAccessToken(null)
    },
  });

  return {
    logout: mutation.mutate,
  };
};
