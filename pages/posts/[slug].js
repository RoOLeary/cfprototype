import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Layout from '../../components/Layout'
import styles from '../../styles/Home.module.css'

export async function getServerSideProps(context) {
  console.log('slug is: ' + context.params.slug);
  // Fetch data from external API
  const res = await fetch(`https://api2.tnw-staging.com/v2/articles/${context.params.slug}`)
  const post = await res.json()

  // Pass data to the page via props
  return { props: post[0] }
}

export default function Post( post ) {
  console.log('ssr post');

  const router = useRouter(); 
  

  return (
    <Layout>
      <Head><title>{post.title}</title></Head>
      <section className={'b-text c-section'}>
        <div className={'o-wrapper'}>
          
          <h1 className={'b-text__heading'}>{post.title}</h1>
          <br />
          {post.authors[0].name}
          <br />
          {post.properties.published}<br />
          {post.tags ? post.tags.map((t, idx) => {
              return <li className={styles.tags} key={idx}>{t.name}</li>; 
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
        </div>
      </section>
    </Layout>
  )
}
