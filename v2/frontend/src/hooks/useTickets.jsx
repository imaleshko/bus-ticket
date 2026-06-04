import api from "@/api/axios.js";
import { useQuery } from "@tanstack/react-query";

export const useTickets = (email) => {
  const query = useQuery({
    queryKey: ["userTickets", email],
    queryFn: async () => {
      const response = await api.get(`/booking/userticket`, {
        params: { email },
      });
      return response.data;
    },
    enabled: !!email
  });

  return {
    tickets: query.data || [],
    isPending: query.isPending,
  };
};

export default useTickets;
