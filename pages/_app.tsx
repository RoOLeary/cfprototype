import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router'
import { useState, useEffect } from 'react';
import Nav from './../components/Nav';
import Loader from './../components/Loader';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import NProgress from 'nprogress';

declare const window: any

// export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric): void {
//     window.gtag('event', name, {
//         event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//         value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//         event_label: id, // id unique to current page load
//         non_interaction: true, // avoids affecting bounce rate.
//     })
// }

// export interface CustomAppProps extends AppProps {
//   Component: NextComponentType;
//   pageProps: { auth?: boolean; session?: Session }
// }

function Cfprototype({ Component, pageProps:  { session, ...pageProps }}: AppProps): JSX.Element {

  const [isLoading, setIsLoading] = useState(false);
  const router = Router;

  const handleRouteChange = () => {
    document.body.scrollIntoView();
  }

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
  })

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true);
      NProgress.start();
      console.log('route changing.')
    });

    Router.events.on("routeChangeComplete", (url)=>{
      console.log('route changed')
      setIsLoading(false);
      NProgress.done(false);
      router.events.on('routeChangeComplete', handleRouteChange)
     
    });

    Router.events.on("routeChangeError", (url) =>{
      console.log('something is bollocksed.')
    });

  }, [Router])

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);


  return (
    <SessionProvider session={session}>  
        {/* <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })}
        > */}
          <Nav key="nav"/> 
          {isLoading && <Loader /> } 
          <Component {...pageProps} />
        {/* </AnimatePresence> */}
      </SessionProvider>
    );
  }

  export default Cfprototype