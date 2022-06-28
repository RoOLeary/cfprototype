import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {
  const response = await fetch(
    'https://api2.tnw-staging.com/v2/articles?limit=200'
  )
  const postList = await response.json()
  return {
    paths: Array.from(postList).map((post) => {
      return {
        params: {
          slug: `${post.slug}`,
        },
      }
    }),
    fallback: false
  }
}


export async function getStaticProps({ params }) {
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

  if(router.isFallback){
    return(
      <div><h1>Loading...</h1></div>
    );
  }



  return (
    <Layout>
      <Head><title>{post.title}</title></Head>
      <section className={'b-text c-section'}>
        <div className={'o-wrapper'}>
          
          <h1 className={'b-text__heading'}>{post.title}</h1>
          <br />
          <div dangerouslySetInnerHTML={{__html: post.content[0].content }} />
          <Link href="/" scroll={false}> 
            <a>Back to posts index</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
