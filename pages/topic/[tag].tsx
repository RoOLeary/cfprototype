import Link from "next/link"
import { useRouter } from "next/router"
import Layout from '../../components/Layout'

export default function Tag(tag) {

    const router = useRouter(); 
    const tagName = router.query.tag ? router.query.tag : 'tagName';

    console.log(tagName);
    
    return (
        <Layout>
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                    <h1>Tag</h1>
                    <p>List of articles tagged with {tagName}</p>
                </div>
                <Link href={'/'}><a>Back</a></Link>
            </section>
        </Layout>
       
    )
}

// export async function getStaticPaths() {
//     const response = await fetch(
//       'https://api2.tnw-staging.com/v2/tags?limit=300'
//     )
    
//     const tagList = await response.json()
//     // console.log(tagList);
//     return {
//       paths: Array.from(tagList).map((tag) => {
//         return {
//           params: {
//             tag: `${tag.slug}`,
//           },
//         }
//       }),
//       fallback: false
//     }
//   }
  
  
//   export async function getStaticProps({ params }) {
//     // fetch single post detail
//     console.log(params.tag);
//     const response = await fetch(
//       `https://api2.tnw-staging.com/v2/tags/${params.tag}`
//     )
//     const tag = await response.json()
//     return {
//       props: tag[0],
//     }
//   }