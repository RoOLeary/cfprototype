import Link from "next/link"
import { useRouter } from "next/router"
import Layout from '../../components/Layout'

export default function Tag({ props }) {

    const router = useRouter(); 
    const tagName = router.query.tag ? router.query.tag : 'tagName';


    return (
        <Layout>
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                    <h1>Tags: {tagName.charAt(0).toUpperCase() + tagName.slice(1)}</h1>
                    <p>List of articles tagged with {tagName}</p>
                </div>
                <Link href={'/'}><a>Back</a></Link>
            </section>
        </Layout>
       
    )
}