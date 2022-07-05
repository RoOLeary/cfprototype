import { useRouter } from "next/router"
import Layout from '../../components/Layout'

export default function Tag({ props }) {

    const router = useRouter(); 
    const tagName = router.query.tag;


    return (
        <Layout>
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                
                    <h1>Tags: {tagName.toUpperCase()}</h1>
                    <p>List of articles tagged with {tagName}</p>
                </div>
            </section>
        </Layout>
       
    )
}