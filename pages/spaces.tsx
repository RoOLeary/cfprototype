import Head from 'next/head'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Link from 'next/link';

const HeroText = {
    headline: 'Spaces Index',
  }

export default function Spaces() {

    return (
        <Layout>
            <Head><title>Next JS Prototype - {HeroText.headline}</title></Head>
            <Header headline={HeroText['headline']} />
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                <h1>Spaces Index</h1>
                <br />
                <Link href={`/spaces/about`} as={`/spaces/about`}>About Us</Link>
                </div>
            </section>
        </Layout>
    );
}