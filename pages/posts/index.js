import Head from 'next/head'

import Post from '../../components/post'

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    'https://ronan-oleary.com/wp-json/wp/v2/posts'
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}

export default function Posts({ postList }) {

  console.log(postList);

  return (
    <main>
      <Head>
        <title>Posts page</title>
      </Head>

      <h1>List of posts</h1>

      <section>
        {Object.entries(postList).map((post, idx) => (
          <Post {...post} key={idx} id={post[1].id}/>
        ))}
      </section>
    </main>
  )
}
