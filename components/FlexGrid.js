import styles from '../styles/FlexGrid.module.css'

const FlexGrid = () => {
    return(
        <div className={styles.container} role="group" aria-label="Three items at either 33% or 100% width">
            <div>Test</div>
            <div>Ing</div>
            <div>This</div>
        </div>
    )
}

export default FlexGrid;