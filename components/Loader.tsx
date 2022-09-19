import styles from '../styles/Loader.module.css';
import {PuffLoader} from 'react-spinners'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.loader}> */}
            <PuffLoader
                color="#fff"
                speedMultiplier={2}
                size={60}
                // size={40}
                />
            {/* </div> */}
        </div>
     );
}

export default Loader;