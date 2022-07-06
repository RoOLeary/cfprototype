import Layout from '../../components/Layout'
import { useRouter } from 'next/router';

export default function Author() {
    const router = useRouter(); 
    const authorName = router.query.slug;
    return (
        <Layout>
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                <h1>Author: {authorName ? authorName.charAt(0).toUpperCase() + authorName.slice(1) : 'Author' }</h1>
                </div>
            </section>
        </Layout>
    )
}