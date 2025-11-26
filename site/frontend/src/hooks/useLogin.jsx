import axios from "axios";
import { useAuth } from "@/context/AuthContext.jsx";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { loginContext } = useAuth();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
      );
      return response.data;
    },
    onSuccess: (data) => {
      loginContext({ user: data.user });
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
