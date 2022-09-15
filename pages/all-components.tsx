import Head from 'next/head';
import Layout from '../components/Layout'
import PageBlocks from '../components/PageBlocks'
// import CardScroller from '../components/CardScroller/CardScroller';

export default function AllComps({ entry, sessions }) {
  
  const content = entry.data[0]['pageBlocks'];
  // console.log('content', content)
  
  return (
    <Layout>
      <Head><title>All Components</title></Head>
      <PageBlocks content={content} sessions={sessions}/>
      {/* <CardScroller /> */}
    </Layout>
  )
}

export const getStaticProps = async ({params}) => {
  const slug = params?.slug || "all-components";
  const response = await fetch(
    // remember to remove the local link and keep 
    // the production one before merging to master!
    `https://cities.local.tnw.dev/api/pages/${slug}.json`
    // `https://cities.thenextweb.com/api/pages/${slug}.json`
  )
  const sessionsResponse = await fetch(
    'https://cities.local.tnw.dev/api/sessions.json'
    // `https://cities.thenextweb.com/api/sessions.json`
  )
  const entry = await response.json();
  const sessions = await sessionsResponse.json()
  return {
    props: { 
      entry: entry,
      sessions: sessions,
    },
  }
}

