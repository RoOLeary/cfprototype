import Head from 'next/head';
import Nav from './Nav';
import SEO from './SEO';
import Footer from './Footer';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}



const Layout = ({ children }) => {

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