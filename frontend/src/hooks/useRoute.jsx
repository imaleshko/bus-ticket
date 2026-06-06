import api from "@/api/axios.js";
import { useQuery } from "@tanstack/react-query";

export const useRoute = (routeId, date) => {
  const query = useQuery({
    queryKey: ["route", routeId, date],
    queryFn: async () => {
      const response = await api.get(`routes/${routeId}`, {
        params: { date },
      });
      return response.data;
    },
    enabled: !!routeId && !!date,
  });

  return {
    route: query.data || null,
    isPending: query.isPending,
  };
};

export default useRoute;
