import styles from "../styles/objectContainer.module.css"

export default function ObjectContainer({ children, columnStart, columnEnd, rowStart, rowEnd }: {children : React.ReactNode, columnStart: number, columnEnd: number, rowStart: number, rowEnd: number}) {
    return (
        <div className={styles.objectContainer} style={{gridColumnStart: columnStart, gridColumnEnd: columnEnd, gridRowStart: rowStart, gridRowEnd: rowEnd}}>
            <div className={styles.floater}>
                {children}
            </div>
        </div>
    )
}