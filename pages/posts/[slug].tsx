import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout'
import FlexGrid from '../../components/FlexGrid'
import styles from '../../styles/Home.module.css'
import IPost from '../../interfaces/IPost'
import { GetStaticPaths, GetStaticProps } from 'next';


interface IProps {
  post: IPost
}

import styled from "styled-components";

const Section = styled.section`
  background: ${props => props.primary ? "white" : "teal"}
`;


export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://api2.tnw-staging.com/v2/articles?limit=500'
  )
  const postList = await response.json()
  return {
    paths: Array.from(postList).map((post) => {
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
  const response = await fetch(
    `https://api2.tnw-staging.com/v2/articles/${params.slug}`
  )
  const post = await response.json()
  return {
    props: post[0],
  }
}

export default function Post( post: IProps ) {
  const router = useRouter();
  return (
    <Layout>
      <Head><title>{post ? post['title'] : 'Generic Post Title'}</title></Head>
      <Section primary className={'b-text c-section'}>
        <div className={'o-wrapper'}>
          <h1 className={'b-text__heading'} dangerouslySetInnerHTML={{__html: post['title']}} />
          <br />
          <Link href={{ pathname: `/authors/${post['authors'][0].slug}`}}><a>{post['authors'][0].name}</a></Link>
          <br />
          {post['properties'].published}<br />
          {post['tags'] ? post['tags'].map((t, idx) => {
              return <li className={styles.tags} key={idx}>
                  <Link href={{ pathname: `/topic/${t.slug}`, query: { data: JSON.stringify(t.slug) } }}><a>{t.name}</a></Link>
                </li>; 
            }).slice(0,1) : '' }
          <br />
          {router.isFallback ? <div><h1>Loading...</h1></div> :  
            <div>
              <div dangerouslySetInnerHTML={{__html: post['content'][0].content }} />
              <br />
              <Link href={'/'}><button className={'c-button'}>Back to Post Index</button></Link>
            </div>
          }
        </div>
      </Section>
    </Layout>
  )
}
