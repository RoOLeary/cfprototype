import fetch from "node-fetch";

import Head from 'next/head';
import Layout from './../../components/Layout';
import PostList from './../../components/PostList';
import React, { useState } from "react";
import useSWRInfinite from "swr/infinite";
import styled from 'styled-components';
import { GetServerSideProps } from 'next'

// const fetcher = url => fetch(url).then(res => res.json())
// const PAGE_SIZE = 10;


const Grid = styled.div`
  margin-top: 2em;
  display: grid; 
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr; 
  }
  grid-template-columns: 3fr 1fr;
  grid-gap: 2em; 
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 4rem;
`;



export default function News( props ) {
  console.log(props);

  const title = 'Latest Nuacht';

  return (
    <Layout>
      <Head><title>Next JS/TNW</title></Head>
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          {!props.data ? <h1 className={'b-text__heading'}>Loading...</h1> :
            <div>
            <h1 className={'b-text__heading'}>{title}</h1>

            <Grid className={'b-articleGrid'}>
              <PostList postData={props.data} currentPage={props.currentPage} maxPage={10} />
             </Grid>
            </div> }
        </div>
        <br />
        {/* <div className="o-wrapper">
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
        </div> */}
      </section>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const page = query.page || 1 
    let postData = null; 
    try{
      const res = await fetch(`https://api2.tnw-staging.com/v2/articles?page={${page}&limit=10`);
      if(res.status !== 200){
        throw new Error('fetch failed');
      }
      postData = await res.json()
    } catch (err){
      postData = { error: { message: err.message }}
    }
    
    return {
        props: { 
          data: postData,
          currentPage: page,
          maxPage: Math.ceil(100 / 10) 
        }
    };
}