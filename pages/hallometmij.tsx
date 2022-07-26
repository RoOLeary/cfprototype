export default function hallometmij({ }) {

  return (
    <h1>hallo met mij</h1>
  )
}

export const getStaticProps = async ({params}) => {
  const slug = params?.slug || "testpage";
  const response = await fetch(
    `https://cities.thenextweb.com/api/pages/${slug}.json`
  )
  const entry = await response.json();
  return {
    props: { 
      entry: entry
    },
  }
}

