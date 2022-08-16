import Layout from './../components/Layout'
import Hero from './../components/Hero'
import Text from './../components/Text'
import Tickets from './../components/Tickets'
import Video from './../components/Video'
import Link from 'next/link'

const ConfText = {
    eyebrow: 'TNW',
    heading: 'Conference Index',
    subHeadline: 'The Next Tech, Now',
}

const TextText = {
  heading: 'Lash another text CTA in here',
  column1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae felis nulla. Nunc sit amet augue dui. Vivamus et libero ut odio fermentum pharetra. Quisque vehicula placerat lorem, eget egestas risus dictum congue. Proin volutpat imperdiet enim ut sagittis. Pellentesque pretium malesuada nibh, vitae fermentum nibh. Ut ac neque pellentesque, placerat nisl nec, convallis ex. Aenean felis neque, dignissim sed lacinia vitae, tempor sed enim. Morbi vitae lectus eget ante rutrum placerat. Quisque iaculis at urna non pretium. Nulla laoreet massa ac elit maximus, suscipit scelerisque leo vulputate. Donec ac tortor ullamcorper, rutrum leo quis, ultrices sapien. Donec porttitor libero urna, a interdum dui dictum et. Duis arcu turpis, convallis eget lacinia quis, iaculis sed tortor. Donec leo sapien, viverra quis mi in, ultrices imperdiet est. Vivamus sed faucibus erat, a consequat quam. Donec dignissim quam nec ullamcorper suscipit. Etiam placerat orci at leo lobortis maximus eget sed erat. Cras et metus fermentum, ultrices nisl id, laoreet diam. Aliquam dignissim feugiat odio, et malesuada ante'
}

const videoEmbedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/S1-wuoFsdT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

export default function Conference() {
  return (
    <Layout>
      <Hero eyebrow={ConfText.eyebrow} heading={ConfText.heading} subHeading={ConfText.subHeadline} />
      <section className="b-text  c-section" id="learn-more">
        <div className="o-wrapper">
          <h1>Conference</h1>
          <br/>
          <p>Now, this is a story all about how, My life got flipped-turned upside down, And I'd like to take a minute
          Just sit right there, I'll tell you how I became the prince of a town called Bel-Air.</p>
          <br />
          <p>In West Philadelphia born and raised
              On the playground was where I spent most of my days
              Chillin' out, maxin', relaxin', all cool
              And all shootin' some b-ball outside of the school
              When a couple of guys who were up to no good
              Started making trouble in my neighborhood
              I got in one little fight and my mom got scared
              She said, "You're movin' with your auntie and uncle in Bel-Air"
          </p>
          <Link href={`conference/about`}><a>About</a></Link>
        </div>
      </section>
      <Text content={TextText} />
      <Tickets />
      <Video content={videoEmbedCode} />
    </Layout>
  )
}
