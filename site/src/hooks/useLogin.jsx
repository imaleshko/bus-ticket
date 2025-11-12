import { useAuth } from "../context/AuthContext.jsx";
import { useMutation } from "@tanstack/react-query";
import { loginUserMock } from "../mock/loginUserMock.jsx";

export const useLogin = () => {
  const {loginContext} = useAuth();
  const mutation = useMutation({
    mutationFn: (data) => loginUserMock(data),
    onSuccess: ({ user, token }) => {
      loginContext({ user, token });
    }
  });

  return {
    login: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  }
}