import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import PageBlocks from '../components/PageBlocks'

export default function About({ entry }) {

  const content = entry.data[0].pageBlocks;
  const HeroText = {
    headline: 'About',
  }
  return (
    <Layout>
      <Head><title>Next JS Prototype - {HeroText.headline}</title></Head>
      <Header headline={HeroText['headline']} />
      <PageBlocks content={content} />
    </Layout>
  )
}

export const getStaticProps = async ({params}) => {
  const slug = params?.slug || "about";
  const response = await fetch(
    `https://cities.thenextweb.com/api/pages/${slug}.json`
  )
  const entry = await response.json();
  return {
    props: { 
      entry: entry
    },
  }
}

