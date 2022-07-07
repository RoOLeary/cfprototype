import Link from "next/link"
import { useRouter } from "next/router"
import Layout from '../../components/Layout'
import { GetServerSideProps } from 'next';
import ITag from '../../interfaces/ITag'
import useSWRInfinite from "swr/infinite";

const fetcher = url => fetch(url).then(res => res.json())
const PAGE_SIZE = 10;

export default function Tag( tag: ITag ) {

    const router = useRouter(); 
    let tagName = router.query.tag ? router.query.tag : 'tagName';
    const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
        index =>
          `https://api2.tnw-staging.com/v2/articles?tag[]=${tagName}&page=${index +
            1}&limit=${PAGE_SIZE}`,
        fetcher,
      );
          
      const posts = data ? [].concat(...data) : [];
      const isLoadingInitialData = !data && !error;
      const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
      const isEmpty = data?.[0]?.length === 0;
      const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

    
    
    console.log('tagname: ' + tagName)
    console.log(posts);
    return (
        <Layout>
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                    <h1>Posted Tagged with: {tagName ? tagName : 'Tag' }</h1>
                    <br />
                    <p>List of articles tagged with <strong><em>{tagName}</em></strong></p>
                    <br />
                    <ul>
                        {posts.map((tag, i) => {
                            return <li key={i}><Link href={`/posts/${tag.slug}`}><a dangerouslySetInnerHTML={{__html: tag.title}} /></Link></li>
                        })}
                    </ul>
                    
                </div>
                <br />
                <div className="o-wrapper">
                    <Link href={'/'}><button className={'c-button'}>Back</button></Link>
                    {!isReachingEnd ? 
                    <button
                        className={'c-button'}
                        disabled={isLoadingMore || isReachingEnd}
                        onClick={() => setSize(size + 1)}>
                        {isLoadingMore
                            ? 'Loading...'
                            : isReachingEnd
                                ? 'No More Posts'
                                : 'Load More'}
                    </button>
                    : ''}
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
  
  
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
   
//     const response = await fetch(
//       `https://api2.tnw-staging.com/v2/articles?tag[]=${params.tag}&limit=50`
//     )
//     const tag = await response.json();
//     return {
//       props: { tagged: tag },
//     }
//   }


