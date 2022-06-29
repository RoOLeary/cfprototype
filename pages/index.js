import Head from 'next/head';
import Layout from '../components/Layout';
import React, { useState } from "react";
import Post from '../components/post';
import useSWR from "swr";
import styles from '../styles/Home.module.css';

const fetcher = (...args) => fetch(...args).then(res => res.json())

// export async function getStaticProps() {
//   // fetch list of posts
//   const response = await fetch(
//     'https://api2.tnw-staging.com/v2/articles?limit=20'
//   )
//   const postList = await response.json()
//   return {
//     props: {
//       postList,
//     },
//   }
// }



export default function Home() {

  const [page, setPage] = useState(1);
  const { data, error } = useSWR(
    `https://api2.tnw-staging.com/v2/articles?page=${page}`,
    fetcher
  );
  
  console.log(data);

  if (error) return <h1>Error</h1>;
  if (!data) return <h1>Loading...</h1>;



  return (
    <Layout>
      
     
      <section className="b-text  c-section" id="learn-more">
          
          <div className="o-wrapper">
          <h1 className={'b-text__heading'}>Latest posts</h1>
          <br />
          {Object.entries(data).map((post, idx) => (
            <Post {...post} key={idx} />
          ))}
          </div>
          <button
          // disabled={!data.previous}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <button
          // disabled={!data.next}
          onClick={() => setPage( page + 1)}
        >
          Next
        </button>
      </section>
    </Layout>
  )
}
