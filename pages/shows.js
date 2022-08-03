import Layout from '../components/Layout';
import Temp from '../components/Temp';
import { ShowsContextProvider } from '../contexts/showsContext';

export default function Shows({ entry }) {

    // const content = entry.data[0].pageBlocks;
    const HeroText = {
      headline: 'Test',
    }
  
    return (
      <Layout>
        <ShowsContextProvider>
            <Temp />
        </ShowsContextProvider>
      </Layout>
    )
  }
  
//   export const getStaticProps = async ({params}) => {
//     const slug = params?.slug || "about";
//     const response = await fetch(
//       `https://cities.thenextweb.com/api/pages/${slug}.json`
//     )
//     const entry = await response.json();
//     return {
//       props: { 
//         entry: entry
//       },
//     }
//   }