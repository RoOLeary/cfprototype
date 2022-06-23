import React, { useState, useEffect, useMemo } from "react"; 
import useSWRInfinite from 'swr/infinite';

import Head from 'next/head'
import Layout from '../../components/Layout'
import Post from '../../components/Post'


export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    'https://api2.tnw-staging.com/v2/articles?limit=100'
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}

export default function Posts({ postList }) {

  console.log(postList);

  return (
    <Layout>
      
      <h1>List of posts</h1>

      <section>
        {Object.entries(postList).map((post, idx) => (
          <Post {...post} key={idx} id={post[1].id}/>
        ))}
      </section>
    </Layout>
  )
}
