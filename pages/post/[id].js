import Link from 'next/link'
import Head from 'next/head'

export async function getStaticPaths() {
  const response = await fetch(
    'https://ronan-oleary.com/wp-json/wp/v2/posts/'
  )
  const postList = await response.json()
  return {
    paths: Array.from(postList).map((post) => {
      return {
        params: {
          id: `${post.id}`,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(params.id)
  // fetch single post detail
  const response = await fetch(
    `https://ronan-oleary.com/wp-json/wp/v2/posts/${params.id}`
  )
  const post = await response.json()
  return {
    props: post,
  }
}

export default function Post({ title, content }) {
  
  return (
    <main>
      <Head>
        <title>{title.rendered}</title>
      </Head>
      <h1>{title.rendered}</h1>
      <p>{content.rendered}</p>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </main>
  )
}
