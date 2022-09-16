import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Signup from '../components/Signup';
import React, { useState } from "react";
import Post from '../components/Post';
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";
import styled from 'styled-components';
import imageLoader from './../imageLoader'
import { GetServerSideProps } from 'next'
import useSWRInfinitePosts from '../hooks/useSWRInfinite'

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
}
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

const LatestHeader = styled.h1`
  margin-top: 1em; 
`

export default function Home(props:any) {

  const [title, setPageTitle ] = useState('Latest Posts');
  const { data, size, setSize, error } = useSWRInfinitePosts(props.data, fetcher);
  console.log('DATA in index', data)
  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  
  return (
    <Layout>
      <Head>
        <title>Next JS Prototype {title && `- ${title}`}</title>
      </Head>
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          {!data ? <h1 className={'b-text__heading'}>Loading...</h1> :
            <div>
            <LatestHeader className={'b-text__heading'}>{title}</LatestHeader>

            <Grid className={'b-articleGrid'}>
              <div>
              {Object.entries(posts).map((post, idx) => (
                  <Post {...post} key={idx} />
              ))}
              </div>
              <Sidebar>
                <Image alt={'sidebar advert'} loader={imageLoader} src="https://source.unsplash.com/350x1600/?ai,tech" width="350" height="1600" layout="fixed"/>
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

export const getServerSideProps: any = async () => {
  // if (typeof window !== 'undefined') {
  //   return {}
  // }

  const props = await fetcher('https://api2.tnw-staging.com/v2/articles')
  console.log('allPosts!!!', props)
  return {
    props: { 
      data: props
    }
  }
}
