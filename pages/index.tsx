import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Signup from '../components/Signup';
import React, { useState } from "react";
import Post from '../components/post';
import useSWRInfinite from "swr/infinite";
import styled from 'styled-components';
import imageLoader from './../imageLoader'

const fetcher = url => fetch(url).then(res => res.json())
const PAGE_SIZE = 10;


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



export default function Home() {

  const [title, setPageTitle ] = useState('Latest Posts');
  // some other crap in here I can do without for the moment. 
  const { data, error, size, setSize } = useSWRInfinite(
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
      <Head><title>Next JS Prototype {title && `- ${title}`}</title></Head>
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          {!data ? <h1 className={'b-text__heading'}>Loading...</h1> :
            <div>
            <h1 className={'b-text__heading'}>{title}</h1>

            <Grid className={'b-articleGrid'}>
              <div>
              {Object.entries(posts).map((post, idx) => (
                  <Post {...post} key={idx} />
              ))}
              </div>
              <Sidebar>
                <Image loader={imageLoader} src="https://source.unsplash.com/350x1600/?ai,tech" width="350" height="1600" />
              </Sidebar>
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
      <Signup signupHeading={'Sign Up'} signupText={'We said.....SIGN. UP!'} />
    </Layout>
  )
}
