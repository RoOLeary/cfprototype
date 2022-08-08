import Layout from '../../components/Layout'
import Header from '../../components/Header'

export default function SpacesPage({ entry }) {

  const HeroText = {
    headline: 'Spaces Inner',
  }

  return (
    <Layout>
      <Header content={HeroText} />
      <section className="b-text  c-section" id="learn-more">
            <div className="o-wrapper">
                <h3>Spaces Generic</h3>
            </div>
        </section>
    </Layout>
  )
}
