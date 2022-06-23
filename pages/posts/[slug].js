import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'



export default function Post( post ) {
  console.log(post);

  const router = useRouter(); 

  if(router.isFallback){
    return(
      <div>loading</div>
    );
  }



  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.content[0].content }} />
      <Link href="/posts"> 
        <a>Back to posts index</a>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await fetch(
    'https://api2.tnw-staging.com/v2/articles'
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
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  console.log(params.slug)
  // fetch single post detail
  const response = await fetch(
    `https://api2.tnw-staging.com/v2/articles/${params.slug}`
  )
  const post = await response.json()
  return {
    props: post[0],
  }
}