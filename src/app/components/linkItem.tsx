import Link from "next/link"
import styles from "../styles/link.module.css"

export default function LinkItem({ children, href, size }: {children: React.ReactNode, href: string, size?: string}) {

    if (size == null) {
        size = "2";
    }
    size += "rem";

    return (
        <Link className={styles.link} style={{fontSize: size}} href={href}>
            {children}
        </Link>
    )
}