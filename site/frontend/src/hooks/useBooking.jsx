import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const useBooking = () => {
  const mutation = useMutation({
    mutationFn: async (bookingData) => {
      const response = await axios.post(
        "http://localhost:3000/api/booking",
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
