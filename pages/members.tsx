import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import YouTube from "react-youtube";

export default function Members() {

    const opts = {
        height: "560",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
    };

    const _onReady = (event) => {
        // event.target.pauseVideo();
    }

    const HeroText = {
        headline: 'Members',
    }

    return (
        <Layout>
            <Head><title>Next JS Prototype - {HeroText.headline}</title></Head>
            
            <YouTube videoId="R61SnV5iLQ4" 
                    opts={opts} onReady={_onReady} />
        </Layout>
  )
}



