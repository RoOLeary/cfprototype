import Link from "next/link"
import { useRouter } from "next/router"
import Layout from '../../components/Layout'
import { GetServerSideProps } from 'next';

export default function Tag(tag){
    
    const router = useRouter(); 
    let tagName = router.query.tag ? router.query.tag : 'tagName';
    console.log('tagname: ' + tagName)
    return (
        <Layout>
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                    <h1>Tag: {tagName ? tagName : 'Tag' }</h1>
                    <br />
                    <p>List of articles tagged with <strong><em>{tagName}</em></strong></p>
                    <br />
                    <ul>
                        {tag.tagged.map((tag, i) => {
                            console.log(tag);
                            return <li key={tag.slug}><Link href={`/posts/${tag.slug}`}><a>{tag.title}</a></Link></li>
                        })}
                    </ul>
                    <Link href={'/'}><a>Back</a></Link>
                </div>
            </section>
        </Layout>
       
    )
}


// export const getStaticPaths: GetStaticPaths = async () => {
//     const response = await fetch(
//       'https://api2.tnw-staging.com/v2/articles?limit=350'
//     )
//     const tagList = await response.json()
//     // console.log(tagList);
//     return {
//       paths: Array.from(tagList).map((tag) => {
        
//         return {
//           params: {
//             tag: `${tag['slug']}`,
//           },
//         }
//       }),
//       fallback: false
//     }
//   }
  
  
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
   
    const response = await fetch(
      `https://api2.tnw-staging.com/v2/articles?tag[]=${params.tag}&limit=200`
    )
    
    const tag = await response.json()
    
    return {
      props: { tagged: tag },
    }
  }


