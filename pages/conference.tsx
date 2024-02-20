import Head from 'next/head'
import Layout from './../components/Layout'
import Hero from './../components/Hero'
import Text from './../components/Text'
import Tickets from './../components/Tickets'
import Video from './../components/Video'
import Blocks from './../components/Blocks'
import Link from 'next/link'

import { IImageBlocks } from '../interfaces/IImageBlocks'

const ConfText = {
    eyebrow: 'TNW',
    heading: 'Conference Index',
    subHeadline: 'The Next Tech, Now',
}

const TextText = {
  heading: 'Lash another text CTA in here',
  column1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae felis nulla. Nunc sit amet augue dui. Vivamus et libero ut odio fermentum pharetra. Quisque vehicula placerat lorem, eget egestas risus dictum congue. Proin volutpat imperdiet enim ut sagittis. Pellentesque pretium malesuada nibh, vitae fermentum nibh. Ut ac neque pellentesque, placerat nisl nec, convallis ex. Aenean felis neque, dignissim sed lacinia vitae, tempor sed enim. Morbi vitae lectus eget ante rutrum placerat. Quisque iaculis at urna non pretium. Nulla laoreet massa ac elit maximus, suscipit scelerisque leo vulputate. Donec ac tortor ullamcorper, rutrum leo quis, ultrices sapien. Donec porttitor libero urna, a interdum dui dictum et. Duis arcu turpis, convallis eget lacinia quis, iaculis sed tortor. Donec leo sapien, viverra quis mi in, ultrices imperdiet est. Vivamus sed faucibus erat, a consequat quam. Donec dignissim quam nec ullamcorper suscipit. Etiam placerat orci at leo lobortis maximus eget sed erat. Cras et metus fermentum, ultrices nisl id, laoreet diam. Aliquam dignissim feugiat odio, et malesuada ante'
}

const video = {
  title: 'Video Title',
  videoEmbedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/S1-wuoFsdT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}


const confBlockContent:any = {

	blockType: 'blocks',
	uid: 123456789,
	image1: 'https://placedog.net/500/300', 
	heading1: 'Conf Heading 1', 
	text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	ctas1: [{
		link: '#',
		label: 'Learn More',
		isBlank: false
	}],
	image2: 'https://placedog.net/501/301', 
	heading2: 'Conf Heading 2', 
	text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	ctas2: [{
		link: '#',
		label: 'Testing',
		isBlank: false
	}]
}




export default function Conference() {
  return (
    <Layout>
      <Head><title>Next JS Prototype - Conference</title></Head>
      <Hero eyebrow={ConfText.eyebrow} heading={ConfText.heading} subHeading={ConfText.subHeadline} />
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          <h1>Conference</h1>
          <br/>
          <p>Now, this is a story all about how, My life got flipped-turned upside down, And I&#39;d like to take a minute
          Just sit right there, I&#39;ll tell you how I became the prince of a town called Bel-Air.</p>
          <br />
          <p>In West Philadelphia born and raised
              On the playground was where I spent most of my days
              Chillin&#39; out, maxin&#39;, relaxin&#39;, all cool
              And all shootin&#39; some b-ball outside of the school
              When a couple of guys who were up to no good
              Started making trouble in my neighborhood
              I got in one little fight and my mom got scared
              She said, &#39;You&#39;re movin&#39; with your auntie and uncle in Bel-Air&#39;
          </p>
          <br />
          <Link href={`conference/about`}>About</Link>
          <br />
          <Link href={`conference/tickets`}>Tickets</Link>
        </div>
      </section>
      <Text content={TextText} />
      <Blocks 
        uid={confBlockContent['uid']} 
        text1={confBlockContent['text1']}
        text2={confBlockContent['text2']}
        heading1={confBlockContent['heading1']}
        heading2={confBlockContent['heading2']}
        ctas1={confBlockContent['ctas1']}
        ctas2={confBlockContent['ctas2']}
        image1={confBlockContent['image1']}
        image2={confBlockContent['image2']}
      />
    
      <Tickets />
      <Video heading={'IM&#39;M PICKLE RICK'} videoEmbedCode={video.videoEmbedCode} />
    </Layout>
  );
}
