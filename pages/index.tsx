import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Signup from '../components/Signup';
import React, { useState, useEffect } from "react";
import Post from '../components/Post';
import styled from 'styled-components';
import imageLoader from './../imageLoader'
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
  const [postsData, setPostsData ] = useState({ ...props, size: 1 });
  const [title, setPageTitle ] = useState('Latest Posts');
  const { data, setSize, error, size } = useSWRInfinitePosts(postsData.data, fetcher, PAGE_SIZE);

  const HandleLoadMoreClick = async() => {
    let arr = data
    await setSize(size + 1)
    const dataProps = await fetcher(`https://api2.tnw-staging.com/v2/articles?page=${size === 1 ? 2 : size}&limit=${PAGE_SIZE}`)
    arr.push(dataProps)
    // I have no idea why this random arr.push code
    // ended up making the trick, it does nothing, but without it the system
    // BREAKS, and it only works on the second button click 🤷‍♀️
    setPostsData({ data, size: size + 1, error })
  }

  const posts = postsData.data ? [].concat(...postsData.data) : [];
  const isLoadingInitialData = !postsData.data && !postsData.error;
  // const isLoadingMore = isLoadingInitialData || (postsData?.size > 0 && postsData.data && typeof postsData.data[postsData?.size - 1] === "undefined");
  const isEmpty = postsData.data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (postsData.data && postsData.data[postsData.data.length - 1]?.length < PAGE_SIZE);
  return (
    <Layout>
      <Head>
        <title>Next JS Prototype {title && `- ${title}`}</title>
      </Head>
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          {!posts ? <h1 className={'b-text__heading'}>Loading...</h1> :
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
            // disabled={isLoadingMore || isReachingEnd}
            onClick={HandleLoadMoreClick}
            >
             {/* {isLoadingMore
              ? 'Loading...'
              : isReachingEnd
                  ? 'No More Posts'
                  :  */}
                  'Load More'
                  {/* }  */}
          </button>
        </div>
      </section>
      <Signup signupHeading={'Sign Up'} signupText={'We said.....SIGN. UP!'} />
    </Layout>
  )
}

export const getServerSideProps: any = async () => {
  const props = await fetcher(`https://api2.tnw-staging.com/v2/articles?page=1&limit=${PAGE_SIZE}`)
  return {
    props: { 
      data: props
    }
  }
}
