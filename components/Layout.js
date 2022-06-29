import Head from 'next/head';
import Nav from './Nav';
import SEO from './SEO';
import Footer from './Footer';
const Layout = ({ children }) => {

    return(
        <>
            <Head>
                <SEO title="Next"/>
            </Head>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>

    )
}

export default Layout; 