import React, { useState, useRef, useEffect } from "react";

import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Signup from '../components/Signup';
import Post from '../components/post';
import styled from 'styled-components';
import imageLoader from './../imageLoader'

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
  const allData = {
    data: props.data.slice(0, 10),
    page: 1
  }
  const [postsData, setPostsData ] = useState({ page: 1, data: [] });
  const [title, setPageTitle ] = useState('Latest Posts');
  useEffect(() => {
    setPostsData({ ...allData})
  }, [])
  const HandleLoadMoreClick = () => {
    const currentPage = postsData.page + 1
    const arr = {
      data: postsData.data,
      page: currentPage
    }
    props.data.slice(postsData.data.length, postsData.data.length + 10).map((post:any) => arr.data.push(post))
    setPostsData({ ...arr})
  }

  const posts = postsData.data ? [].concat(...postsData.data) : [];
  // const isLoadingInitialData = !postsData.data;
  // const isLoadingMore = isLoadingInitialData || (postsData?.size > 0 && postsData.data && typeof postsData.data[postsData?.size - 1] === "undefined");
  const isEmpty = postsData.data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (postsData.data && postsData.data.length === props.data.length);
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
            disabled={isReachingEnd}
            onClick={HandleLoadMoreClick}
            >
              {
              // isLoadingMore
              // ? 'Loading...'
              // : 
              isReachingEnd
                  ? 'No More Posts'
                  : 
                  'Load More'
              }  
          </button>
        </div>
      </section>
      <Signup signupHeading={'Sign Up'} signupText={'We said.....SIGN. UP!'} />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch(`https://api2.tnw-staging.com/v2/articles?page=1&limit=100000`)
  const props = await res.json()
  return {
    data: props
  }
}
