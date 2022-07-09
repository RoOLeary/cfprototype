import React, { useState, useEffect, useMemo } from "react"; 
import Layout from '../components/Layout'
import Header from '../components/Header'
import PageBlocks from '../components/PageBlocks'
// import { GetStaticProps } from 'next';

export default function About({ entry }) {
  // console.log(slug);
  const content = entry.data[0].pageBlocks;
  const HeroText = {
    headline: 'About',
  }
  return (
    <Layout>
      <Header content={HeroText} />
      <PageBlocks content={content} />
    </Layout>
  )
}

// export const getStaticProps = async (context) => {
//   const slug = context?.params?.slug || "about";
//   const res = await fetch(`https://servd-test-staging.cl-eu-west-3.servd.dev/api/pages/${slug}.json`);
//   let entry = await res.json();

//   return {
//       props: {
//           entry: entry
//       }
//   }
// }

export const getStaticProps = async ({params}) => {
    const slug = params?.slug || "all-components";
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