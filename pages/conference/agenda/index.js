import Layout from '../../../components/Layout'
import Header from '../../../components/Header'
import Tickets from '../../../components/Tickets'

export default function Agenda({ entry }) {

  const HeroText = {
    headline: 'Conference Tickets',
  }

  return (
    <Layout>
        <Header headline={HeroText['headline']} />
        <Tickets />
    </Layout>
  )
}
