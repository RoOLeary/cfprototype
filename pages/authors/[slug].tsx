import Layout from '../../components/Layout'
import { useRouter } from 'next/router';

export default function Author() {
    const router = useRouter(); 
    const authorName = router.query.slug ? router.query.slug : 'Johan Doe';
    return (
        <Layout>
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                <h1>Author: {authorName}</h1>
                </div>
            </section>
        </Layout>
    )
}