import Layout from '../../components/Layout'
import Header from '../../components/Header'

export default function ProgramsPage({ entry }) {

  const HeroText = {
    headline: 'Programs Inner',
  }

  return (
    <Layout>
      <Header content={HeroText} />
      <section className="b-text  c-section" id="learn-more">
            <div className="o-wrapper">
                <h3>Programs Generic</h3>
            </div>
        </section>
    </Layout>
  )
}
