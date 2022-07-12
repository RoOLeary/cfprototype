import React, { useState, useEffect, useMemo } from "react"; 
import Layout from '../components/Layout'
import Header from '../components/Header'
import PageBlocks from '../components/PageBlocks'


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

export const getStaticProps = async ({params}) => {
  const slug = params?.slug || "about";
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

