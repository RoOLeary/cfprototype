import Head from 'next/head'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Link from 'next/link';

const HeroText = {
    headline: 'Programs Index',
  }

export default function Programs() {

    return (
        <Layout>
            <Head><title>Next JS Prototype - {HeroText.headline}</title></Head>
            <Header headline={HeroText['headline']} />
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                <h1>Programs Index</h1>
                <br />
                <Link href={`/programs/about`} as={`/programs/about`}><a>About Us</a></Link>
                </div>
            </section>
        </Layout>
    )
}