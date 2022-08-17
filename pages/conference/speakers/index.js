import Layout from '../../../components/Layout'
import Header from '../../../components/Header'
import Tickets from '../../../components/Tickets'

export default function Speakers({ entry }) {

  const HeroText = {
    headline: 'Speakers',
  }

  return (
    <Layout>
        <Header headline={HeroText['headline']} />
        <p>Speakers</p>
    </Layout>
  )
}
