import Head from 'next/head';
import Layout from '../components/Layout';
import React, { useState } from "react";
import Post from '../components/post';
import useSWR from "swr";
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router'

// const fetcher = (...args) => fetch(...args).then(res => res.json())
// console.log(fetcher);
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



export default function Home({ postList }) {

  const router = useRouter();
  const [title, setPageTitle] = useState('Latest Posts')
  const [page, setPage] = useState(1);
  // const { data, error } = useSWR(
  //   `https://api2.tnw-staging.com/v2/articles?page=${page}&limit=10`,
  //   fetcher
  // );
  
  // console.log(data);

  // if (error) return <h1>Error</h1>;
  // if (!data) return <h1>Loading...</h1>;

  const messyNav = (page) => {
    setPage( page + 1 );
    window.scrollTo(0, 0)
    setPageTitle(`Page  ${++page}`)
  }

  return (
    <Layout>
      
     
      <section className="b-text  c-section" id="learn-more">
          
          <div className="o-wrapper">
          {!postList ? <h1 className={'b-text__heading'}>Loading...</h1> :
            <div>
            <h1 className={'b-text__heading'}>{title}</h1>
            <br />
            {Object.entries(postList).map((post, idx) => (
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
            onClick={() => messyNav(page)}
          >
            Next
          </button>
        </div>
      </section>
    </Layout>
  )
}
