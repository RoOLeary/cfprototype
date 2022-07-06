import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

export default function Cfprototype({ Component, pageProps }: AppProps) {
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