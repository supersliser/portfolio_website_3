import styles from "../styles/link.module.css"

export default function BigLink({link}: {link : string}) {
    return (
    <a href={link} className={styles.linkContainer}>
        <iframe height={600} className={styles.frame} src={link} />
    </a>
    )
}