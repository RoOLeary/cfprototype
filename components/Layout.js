import Head from 'next/head';
import Nav from './Nav';
import SEO from './SEO';
import Text from './Text';
import Video from './Video';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}



const TextContent = {
    title: 'Ask my arse',
    articleBody: 'Your Buddy is now your Guy',
}

const Layout = ({ children }) => {
    const router = useRouter();
    return(
        <>
            <Head>
                <SEO title="Next"/>
            </Head>
            <Nav />
            
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
            <Footer />
        </>

    )
}

export default Layout; 