import { useMutation } from "@tanstack/react-query";
import api from "@/api/axios.js";

export const useBooking = () => {
  const mutation = useMutation({
    mutationFn: async (bookingData) => {
      const response = await api.post(
        "booking",
        bookingData,
      );
      return response.data;
    },
  });

  return {
    createBooking: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error
      ? { message: mutation.error.response?.data?.message }
      : null,
  };
};
