import useSWRInfinite from "swr/infinite";

const useSWRInfinitePosts = (initialData, fetcher, pageSize) => {
  const { data, size, setSize, error } = useSWRInfinite(
    index => `https://api2.tnw-staging.com/v2/articles?page=${index +
    1}&limit=${pageSize}`, 
    fetcher, 
    {
      fallbackData: initialData,
    }
  )
  return {
    data,
    size,
    setSize,
    error,
  }
}

export default useSWRInfinitePosts