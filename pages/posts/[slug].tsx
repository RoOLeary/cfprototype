import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/Layout'
import FlexGrid from '../../components/FlexGrid'
import styles from '../../styles/Home.module.css'
import { GetStaticProps } from 'next';

import styled from "styled-components";

const Section = styled.section`
  background: ${props => props.primary ? "teal" : "white"}
`;


export async function getStaticPaths() {
  const response = await fetch(
    'https://api2.tnw-staging.com/v2/articles?limit=350'
  )
  const postList = await response.json()
  return {
    paths: Array.from(postList).map((post) => {
      // console.log(post['slug']);
      return {
        params: {
          slug: `${post['slug']}`,
        },
      }
    }),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  // fetch single post detail
  const response = await fetch(
    `https://api2.tnw-staging.com/v2/articles/${params.slug}`
  )
  const post = await response.json()
  return {
    props: post[0],
  }
}

export default function Post( post ) {
  // console.log(post);

  const router = useRouter(); 
  

  return (
    <Layout>
      <Head><title>{post.title}</title></Head>
      <Section primary className={'b-text c-section'}>
        <div className={'o-wrapper'}>
         
          <h1 className={'b-text__heading'}>{post.title}</h1>
          <br />
          <Link href={{ pathname: `/authors/${post.authors[0].slug}`}}><a>{post.authors[0].name}</a></Link>
          <br />
          {post.properties.published}<br />
          {post.tags ? post.tags.map((t, idx) => {
              return <li className={styles.tags} key={idx}>
                  <Link href={{ pathname: `/topic/${t.slug}`, query: { data: JSON.stringify(t.slug) } }}><a>{t.name}</a></Link>
                  {/* <Link href={`/topic/${t.slug}`}><a>{t.name}</a></Link> */}
                </li>; 
            }) : 'no tags' }
          <br />

          {router.isFallback ? <div><h1>Loading...</h1></div> :  
            <div>
              <div dangerouslySetInnerHTML={{__html: post.content[0].content }} />
              <Link href="/"> 
                <a>Back to posts index</a>
              </Link>
            </div>
          }
          <FlexGrid />
        </div>
        
      </Section>
      
    </Layout>
  )
}
