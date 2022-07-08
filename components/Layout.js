import Head from 'next/head';
import Header from './Header';
import Nav from './Nav';
import SEO from './SEO';
import Text from './Text';
import Video from './Video';
import Footer from './Footer';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}

const HeroText = {
    eyebrow: 'Ask my arse',
    headline: 'Your Buddy is now your Guy',
    subHeading: 'Go on ta fuck ye',
}

const TextContent = {
    title: 'Ask my arse',
    articleBody: 'Your Buddy is now your Guy',
}

const videoEmbedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/S1-wuoFsdT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <SEO title="Next"/>
            </Head>
            <Nav />
            <Header content={HeroText}/>
            <motion.main
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }} // Set the transition to linear
                className="body__content"
            >
                {children}
            </motion.main>
            <Text content={TextContent} />
            <Video content={videoEmbedCode} />
            <Footer />
        </>

    )
}

export default Layout; 