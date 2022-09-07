import Head from 'next/head'
import Layout from '../../components/Layout'
import Header from '../../components/Header'

export default function SpacesPage({ entry }) {

  const HeroText = {
    headline: 'Spaces | Spaces Inner Page',
  }

  return (
    <Layout>
      <Head><title>{HeroText.headline}</title></Head>
      <Header headline={HeroText['headline']} />
      <section className="b-text  c-section" id="learn-more">
            <div className="o-wrapper">
                <h3>Spaces Generic</h3>
            </div>
        </section>
    </Layout>
  )
}
