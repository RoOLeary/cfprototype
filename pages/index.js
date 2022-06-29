import Head from 'next/head';
import Layout from '../components/Layout';
import React, { useState } from "react";
import Post from '../components/post';
import useSWR from "swr";
import styles from '../styles/Home.module.css';

const fetcher = (...args) => fetch(...args).then(res => res.json())
console.log(fetcher);

export default function Home() {

  const [page, setPage] = useState(1);
  const { data, error } = useSWR(
    `https://api2.tnw-staging.com/v2/articles?page=${page}&limit=10`,
    fetcher, { refreshInterval: 1000 }
  );
  
  if (error) return <h1>Error</h1>;
  // if (!data) return <h1>Loading...</h1>;

  return (
    <Layout>
      <section className="b-text  c-section" id="learn-more">
          <div className="o-wrapper">
          {!data ? <h1 className={'b-text__heading'}>Loading...</h1> :
            <div>
            <h1 className={'b-text__heading'}>Latest posts</h1>
            <br />
            {Object.entries(data).map((post, idx) => (
              <Post {...post} key={idx} />
            ))}
            </div> }
          </div>
          <div className="o-wrapper">
          {page > 1 ?
          <button 
            className={'c-button'}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button> : ''}
          
          <button
            className={'c-button'}
            onClick={() => setPage( page + 1)}
          >
            Next
          </button>
        </div>
      </section>
    </Layout>
  )
}
