import Layout from '../components/Layout';
import Header from '../components/Header';
import Link from 'next/link';

const HeroText = {
    headline: 'Spaces Index',
  }

export default function Spaces() {

    return (
        <Layout>
            <Header headline={HeroText['headline']} />
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                <h1>Spaces Index</h1>
                <br />
                <Link href={`/spaces/about`} as={`/spaces/about`}><a>About Us</a></Link>
                </div>
            </section>
        </Layout>
    )
}