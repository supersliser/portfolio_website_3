import styles from "../styles/background.module.css"

export default function MainContainer({ children }: { children: React.ReactNode })
{
    return (
        <div className={styles.backgroundContainer}>
            {children}
        </div>
    )
}