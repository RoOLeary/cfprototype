import Layout from '../components/Layout'
import Header from '../components/Header'

export default function Jules({ entry }) {

//   const content = entry.data[0].pageBlocks;
  const HeroText = {
    headline: 'Hello Julian!',
  }

  return (
    <Layout>
      <Header content={HeroText} />
    </Layout>
  )
}