import { useMutation } from "@tanstack/react-query";
import { registerUserMock } from "../mock/registerUserMock.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export const useRegister = () => {
  const { loginContext } = useAuth();
  const mutation = useMutation({
    mutationFn: (data) => registerUserMock(data),
    onSuccess: ({ user, token }) => {
      loginContext({ user, token });
    },
  });

  return {
    register: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
};
