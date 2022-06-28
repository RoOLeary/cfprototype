import React, { useState, useEffect, useMemo } from "react"; 
import Head from 'next/head'
import Layout from '../../components/Layout'

import Post from '../../components/post'
import styles from '../../styles/Home.module.css'


export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    'https://api2.tnw-staging.com/v2/articles?limit=20'
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}

export default function Posts({ postList }) {

  return (
    <Layout>
      
      <h1>List of posts</h1>

      <section className={styles.main}>
        <>
        {Object.entries(postList).map((post, idx) => (
          <Post {...post} key={idx} />
        ))}
        </>
      </section>
    </Layout>
  )
}
