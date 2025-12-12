import api from "@/api/axios.js";
import { useQuery } from "@tanstack/react-query";

export const useRoutes = (from, to, date) => {
  const query = useQuery({
    queryKey: ["routes", from, to, date],
    queryFn: async () => {
      const response = await api.get("routes", {
        params: { from, to },
      });
      return response.data;
    },
    enabled: !!from && !!to && !!date
  });

  return {
    routes: query.data || [],
    isPending: query.isPending,
  }
}

export default useRoutes;
