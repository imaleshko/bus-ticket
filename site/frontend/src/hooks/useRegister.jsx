import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext.jsx";
import api from "@/api/axios.js";

export const useRegister = () => {
  const { loginContext } = useAuth();
  const mutation = useMutation({
    mutationFn: async (userData) => {
      const response = await api.post(
        "auth/register",
        userData,
      );
      return response.data;
    },
    onSuccess: (data) => {
      loginContext({ accessToken: data.accessToken, user: data.user });
    },
  });

  return {
    register: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error
      ? { message: mutation.error.response?.data?.message }
      : null,
  };
};
