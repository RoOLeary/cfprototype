import React, { useState, useEffect, useMemo } from "react"; 
import useSWRInfinite from 'swr/infinite';
import Layout from '../../components/Layout'
import Post from '../../components/Post'

const fetcher = url => fetch(url).then(res => res.json());
const PAGE_SIZE = 10;

export default function Posts() {

  const {data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    index =>
    `https://api2.tnw-staging.com/v2/articles?page=${index + 1}&limit=10`,
    fetcher,
  );
  
  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  return (
    <Layout>
      
      <h1>List of posts</h1>

      <section>
        {Object.entries(posts).map((post, idx) => (
          <Post {...post} key={idx} id={post[1].id}/>
        ))}

      <button
          className={`bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`}
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}>
          {isLoadingMore
              ? 'Loading...'
              : isReachingEnd
                  ? 'No More Posts'
                  : 'Load More'}
      </button>
      </section>
    </Layout>
  )
}
