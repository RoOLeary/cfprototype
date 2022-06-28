import Head from 'next/head';
import Nav from './Nav'
const Layout = ({ children }) => {

    return(
        <>
            <Head>
                <title>Next.Js CF Pages</title>
            </Head>
            <Nav />
            <main>
                {children}
            </main>
        </>

    )
}

export default Layout; 