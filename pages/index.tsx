import Head from 'next/head';
import Layout from '../components/Layout';
import React, { useState } from "react";
import Post from '../components/post';
import useSWRInfinite from "swr/infinite";

const fetcher = url => fetch(url, {        
  mode: "no-cors",
  credentials: "include",
  headers: {
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : "true"
  }
}).then(res => res.json());

// console.log('fetcher: ' + fetcher)
const PAGE_SIZE = 10;

export default function Home() {

  const [title, setPageTitle ] = useState('Latest Posts');
  // some other crap in here I can do without for the moment. 
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    index =>
      `https://api2.tnw-staging.com/v2/articles?page=${index +
        1}&limit=${PAGE_SIZE}`,
    fetcher,
  );
      

    console.log(data);

  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  
  return (
    <Layout>
       <Head><title>Next JS/TNW</title></Head>
     
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          {!data ? <h1 className={'b-text__heading'}>Loading...</h1> :
            <div>
            <h1 className={'b-text__heading'}>{title}</h1>
            <br />
            {Object.entries(posts).map((post, idx) => (
                <Post {...post} key={idx} />
            ))}
            </div> }
        </div>
        <br />
        <div className="o-wrapper">
          <button
            className={'c-button'}
            disabled={isLoadingMore || isReachingEnd}
            onClick={() => setSize(size + 1)}>
            {isLoadingMore
                ? 'Loading...'
                : isReachingEnd
                    ? 'No More Posts'
                    : 'Load More'}
          </button>
        </div>
      </section>
    </Layout>
  )
}
