import { useQuery } from "@tanstack/react-query";

// Custom hook for fetching data
const useFetchData = (key, page, limit, fetchFunction) => {
  return useQuery({
    queryKey: [key, page, limit],
    queryFn: () => fetchFunction(page, limit),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    cacheTime: 3600000, // 1 hour in milliseconds
    staleTime: 3600000, // 1 hour in milliseconds
    refetchInterval: 3600000, // 1 hour in milliseconds
  });
};

export default useFetchData;
