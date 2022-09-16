import useSWRInfinite from "swr/infinite";

const useSWRInfinitePosts = (fallbackData, fetcher) => {
  const { data, size, setSize, error } = useSWRInfinite(
    index => `https://api2.tnw-staging.com/v2/articles?page=${index +
    1}&limit=${PAGE_SIZE}`, 
    fetcher, 
    {
      fallbackData: fallbackData,
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