import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Nav from './../components/Nav';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";

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
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })}
        >
          <Nav key="nav"/>
          <Component {...pageProps} />
        </AnimatePresence>
      </SessionProvider>
    );
  }

  export default Cfprototype