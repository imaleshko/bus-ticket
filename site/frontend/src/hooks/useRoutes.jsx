import axios from "axios";
import { useEffect, useState } from "react";

export const useRoutes = (from, to) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (!from || !to) {
      setRoutes([])
      return;
    }

    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/routes",
          {params: {from, to}}
        )
        setRoutes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    void getData();
  }, [from, to]);
  return routes;
}

export default useRoutes;