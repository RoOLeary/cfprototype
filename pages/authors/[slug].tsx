import Link from 'next/link'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router';
import IAuthor from '../../interfaces/IAuthor'
import useSWRInfinite from "swr/infinite";

const fetcher = url => fetch(url).then(res => res.json())
const PAGE_SIZE = 10;

interface IProps {
    author: IAuthor
}

export default function Author ( author: IProps ) {
    // console.log(author);
    const router = useRouter(); 
    const authorName = router.query.name ? router.query.name : 'Callum Booth';
    const authorSlug = router.query.slug ? router.query.slug : 'callum-booth';
    const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
        index =>
          `https://api2.tnw-staging.com/v2/articles?author[]=${authorSlug}&page=${index +
            1}&limit=${PAGE_SIZE}`,
        fetcher,
      );
     
    const posts = data ? [].concat(...data) : [];
    const isLoadingInitialData = !data && !error;
    const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

    return(
        <Layout>
            <section className={'b-text c-section'}>
                <div className={'o-wrapper'}>
                <h1>Author: {authorName}</h1>
                <br />
                <ul>
                    {posts.map((post, i) => {
                        // console.log(post.title);
                        return <li key={i}><Link href={`/posts/${post.slug}`}><a dangerouslySetInnerHTML={{__html: post.title}} /></Link></li>
                    })}
                </ul>
                <br />
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
    );
    
};