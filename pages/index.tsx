import Head from 'next/head';
import Layout from '../components/Layout';
import React, { useState } from "react";
import Post from '../components/post';
import useSWRInfinite from "swr/infinite";
import styled from 'styled-components';

const fetcher = url => fetch(url).then(res => res.json())
const PAGE_SIZE = 10;


const Grid = styled.div`
  margin-top: 2em;
`;

export default function Home() {

  const [title, setPageTitle ] = useState('Latest Posts');
  // some other crap in here I can do without for the moment. 
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `https://api2.tnw-staging.com/v2/articles?page=${index +
        1}&limit=${PAGE_SIZE}`,
    fetcher,
  );
      
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

            <Grid className={'b-articleGrid'}>
              {Object.entries(posts).map((post, idx) => (
                  <Post {...post} key={idx} />
              ))}
            </Grid>
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
