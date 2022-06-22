import Link from 'next/link'
import Head from 'next/head'

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
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(params.slug)
  // fetch single post detail
  const response = await fetch(
    `https://api2.tnw-staging.com/v2/articles?slug=${params.slug}`
  )
  const post = await response.json()
  return {
    props: post[0],
  }
}

export default function Post(post) {
  console.log(post);
  return (
    <main>
      <Head>
        
      </Head>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.content[0].content }} />
      <Link href="/posts">
        <a>Back to posts index</a>
      </Link>
    </main>
  )
}
