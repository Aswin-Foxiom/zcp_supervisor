import { useQuery } from "@tanstack/react-query";

// Custom hook for fetching data
const useFetchData = (
  key,
  page = null,
  limit = null,
  fetchFunction,
  type = null
) => {
  return useQuery({
    // queryKey: page && limit ? [key, page, limit] : [key],
    queryKey:
      page && limit
        ? [key, page, limit, ...(type ? [type] : [])] // Include type only if it's not null
        : [key, ...(type ? [type] : [])], // Same for key without pagination
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
