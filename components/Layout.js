import Head from 'next/head';

const Layout = ({ children }) => {

    return(
        <>
            <Head>
                <title>Next.Js CF Pages</title>
            </Head>
            <main>
                {children}
            </main>
        </>

    )
}

export default Layout; 