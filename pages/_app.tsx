import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// declare const window: any

// export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric): void {
//     window.gtag('event', name, {
//         event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//         value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//         event_label: id, // id unique to current page load
//         non_interaction: true, // avoids affecting bounce rate.
//     })
// }

function Cfprototype({ Component, pageProps }: AppProps): JSX.Element {
  return (
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
    );
  }

  export default Cfprototype