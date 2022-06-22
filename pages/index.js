import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  

  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      
      <section>
      <h1>Generic Index Page</h1>
      <Link href="/posts">
        <a>Go to posts</a>
      </Link>
      </section>
    </main>
  )
}
