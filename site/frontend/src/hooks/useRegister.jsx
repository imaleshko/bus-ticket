import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext.jsx";

export const useRegister = () => {
  const { loginContext } = useAuth();
  const mutation = useMutation({
    mutationFn: async (userData) => {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        userData,
      );
      return response.data;
    },
    onSuccess: (data) => {
      loginContext({ user: data.user });
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
