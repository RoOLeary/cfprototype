import Head from 'next/head';
import Layout from './../../components/Layout';
import React, { useState } from "react";
import Post from './../../components/post';
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



export default function News(latest) {

  const posts = latest.latest;

  console.log(posts)
  const [title, setPageTitle ] = useState('Latest Posts');
  
  
  return (
    <Layout>
      <Head><title>Next JS/TNW</title></Head>
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          {!posts ? <h1 className={'b-text__heading'}>Loading...</h1> :
            <div>
            <h1 className={'b-text__heading'}>{title}</h1>

            <Grid className={'b-articleGrid'}>
              <div>
              {posts.map((post, idx) => (    
                  <Post {...post} key={idx} />
              ))}
              </div>
              {/* <Sidebar>
                <img src="https://source.unsplash.com/350x1600/?ai,tech" />
              </Sidebar> */}
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


export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.query.category ? context.query.category : 'tech'
    const res = await fetch(`https://api2.tnw-staging.com/v2/articles`);
    let data = await res.json();
    
    return {
        props: { 
            latest: data,
        }
    };
}