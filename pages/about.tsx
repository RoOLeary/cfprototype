import Layout from '../components/Layout'
import Header from '../components/Header'
import PageBlocks from '../components/PageBlocks'
import Search from '../components/Search';

export default function About({ entry }) {

  const content = entry.data[0].pageBlocks;
  const HeroText = {
    headline: 'About',
  }

  return (
    <Layout>
      <Header headline={HeroText['headline']} />
      <PageBlocks content={content} />
      <Search />
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

