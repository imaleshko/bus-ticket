import { useAuth } from "@/context/AuthContext.jsx";
import { useMutation } from "@tanstack/react-query";
import api from "@/api/axios.js";

export const useLogin = () => {
  const { loginContext } = useAuth();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await api.post("auth/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      loginContext({ accessToken: data.accessToken, user: data.user });
    },
  });

  return {
    login: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error
      ? { message: mutation.error.response?.data?.message }
      : null,
  };
};
