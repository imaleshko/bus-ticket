import { useMutation } from "@tanstack/react-query";
import { registerUserMock } from "../mock/registerUserMock.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export const useRegister = () => {
  const { login } = useAuth();
  const mutation = useMutation({
    mutationFn: (data) => registerUserMock(data),
    onSuccess: ({ user, token }) => {
      login({ user, token });
    },
  });

  return {
    register: mutation.mutate,
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
