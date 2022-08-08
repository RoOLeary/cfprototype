import Layout from '../components/Layout';
import Header from '../components/Header';
import Link from 'next/link';

const HeroText = {
    headline: 'Programs Index',
  }

export default function Programs() {

    return (
        <Layout>
             <Header content={HeroText} />
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