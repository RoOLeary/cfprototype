import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'

// export async function getStaticPaths() {
//   const response = await fetch(
//     'https://api2.tnw-staging.com/v2/articles?limit=10'
//   )
//   const postList = await response.json()
//   return {
//     paths: Array.from(postList).map((post) => {
//       return {
//         params: {
//           slug: `${post.slug}`,
//         },
//       }
//     }),
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params }) {
//   console.log(params.slug)
//   // fetch single post detail
//   const response = await fetch(
//     `https://api2.tnw-staging.com/v2/articles?slug=${params.slug}`
//   )
//   const post = await response.json()
//   return {
//     props: post[0],
//   }
// }

export async function getServerSideProps(context) {
  const { slug } = context.query
  const res = await fetch(`https://api2.tnw-staging.com/v2/articles/${slug}`);
  const post = await res.json();
  return {
      props: {
         post
      }
  };
}

export default function Post({ post }) {
  // console.log(post[0].content[0].content);
  return (
    <Layout>
      <h1>{post[0].title}</h1>
      <div dangerouslySetInnerHTML={{__html: post[0].content[0].content }} />
      <Link href="/posts">
        <a>Back to posts index</a>
      </Link>
    </Layout>
  )
}
