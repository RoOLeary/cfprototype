import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function Cfprototype({ Component, pageProps }) {
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
  