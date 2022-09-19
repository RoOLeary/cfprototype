import Head from 'next/head';
import Layout from '../components/Layout'
import PageBlocks from '../components/PageBlocks'
// import CardScroller from '../components/CardScroller/CardScroller';

export default function AllComps({ entry }) {
  
  const content = entry.data[0]['pageBlocks'];
  
  return (
    <Layout>
      <Head><title>All Components</title></Head>
      <PageBlocks content={content} />
      {/* <CardScroller /> */}
    </Layout>
  )
}

export const getStaticProps = async ({params}) => {
  const slug = params?.slug || "all-components";
  const delay = (s) => new Promise(resolve => setTimeout(resolve, s))
  const response = await fetch(
    `https://cities.thenextweb.com/api/pages/${slug}.json`
  )
  await delay(1000);
  const entry = await response.json();
  return {
    props: { 
      entry: entry
    },
  }
}

