import Link from 'next/link'
import Head from 'next/head'

export async function getStaticPaths() {
  const response = await fetch(
    'https://ronan-oleary.com/wp-json/wp/v2/posts'
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
    `https://ronan-oleary.com/wp-json/wp/v2/posts?slug=${params.slug}`
  )
  const post = await response.json()
  return {
    props: post[0],
  }
}

export default function Post( post ) {
  console.log(post.content);
  return (
    <main>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>
      <h1>{post.title.rendered}</h1>
      <p dangerouslySetInnerHTML={{__html: post.content.rendered }} />
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </main>
  )
}
