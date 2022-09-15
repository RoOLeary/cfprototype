import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout'
import FlexGrid from '../../components/FlexGrid'
import { IPost } from '../../interfaces/IPost'
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next';
import styled from "styled-components";
import imageLoader from './../../imageLoader'
import Tags from '../../components/Tags'

const Section = styled.section`
  background: ${props => props.primary ? "white" : "teal"}
`;

const SingleContainer = styled.div`
  max-width: 1024px;
  padding: 2em 0;
  @media screen and (max-width: 1024px){
   padding: 2em;
  }
`;

const SingleArticleGrid = styled.div`
  display: grid; 
  grid-template-columns: 1fr 3fr; 
  padding: 2em 0; 
  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr; 
    padding: 2em 0;
    
  }
`;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch(
//     'https://api2.tnw-staging.com/v2/articles?limit=500',
//       {        
//         mode: "no-cors",
//         credentials: "include",
//         headers: {
//             "Access-Control-Allow-Origin" : "*", 
//             "Access-Control-Allow-Credentials" : "true"
//       }
//     }
//   );
const PostDate = styled.div`
  display: flex;
  justify-content: center;
`
//   const postList = await response.json()
//   return {
//     paths: Array.from(postList).map((post) => {
//       return {
//         params: {
//           slug: `${post['slug']}`,
//         },
//       }
//     }),
//     fallback: false
//   }
// }


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://api2.tnw-staging.com/v2/articles/${params.slug}`,
        {        
          mode: "no-cors",
          credentials: "include",
          headers: {
              "Access-Control-Allow-Origin" : "*", 
              "Access-Control-Allow-Credentials" : "true"
        }
      }
  )
  const post = await response.json()
  return {
    props: post[0]
  }
}



export default function Post( post: IPost ) {
  const router = useRouter();

  // console.log(post['content'][0].content);

  const filterBody = (el) => {
    return el;
  } 

  let cnt = post['content'][0].content;
  const date = new Date(post['properties'].published)
  return (
    <Layout>
      <Head><title>{post ? post['title'] : 'Generic Post Title'}</title></Head>
      
      <Section primary className={'b-section'}>
        <div style={{ marginTop: '80px !important' }}>
        <Image
          alt={post['title']}
          className={'articleFtImg'}
          loader={imageLoader}
          src={post['media'][0].media.attributes.url && post['media'][0].media.attributes.url}
          layout="responsive"
          width={1200}
          height={400}
        />
          <SingleContainer className={'o-wrapper singleContainer'}>
            <br /><br />
            <Tags tags={post['tags']}/>
            <h1
              className={'b-text__heading articleSingle'}
              dangerouslySetInnerHTML={{__html: post['title']}}
            />
            <br />
            <PostDate>
              {date.toDateString()}<br /><br />
              <br />
            </PostDate>
            <SingleArticleGrid>
              <div>
                <Link href={{ pathname: `/authors/${post['authors'][0].slug}`, query: { name: post['authors'][0].name }}}><a>{post['authors'][0].name}</a></Link>
                <br />
                <div>
                  {date.toUTCString()}<br /><br />
                  <br />
                </div>
              </div>
                <div>
                {cnt &&   
                    <>
                      <div className={'articleContent'} dangerouslySetInnerHTML={{__html: filterBody(cnt) }} />
                      <br />
                      <Link href={'/'}><button className={'c-button'}>Back to Post Index</button></Link>
                    </>
                }
                </div>
            </SingleArticleGrid>
          </SingleContainer>
        </div>
      </Section>
    </Layout>
  )
}
