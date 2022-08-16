import Layout from '../../components/Layout'
import Header from '../../components/Header'

export default function About({ entry }) {

  const HeroText = {
    headline: 'Conf About',
  }

  return (
    <Layout>
      <Header headline={HeroText['headline']} />
      <div>ABOOOT EVENT</div>
    </Layout>
  )
}
