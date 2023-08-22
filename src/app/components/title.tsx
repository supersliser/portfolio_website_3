import styles from "../styles/title.module.css"

export default function Title({ children, size, align } : {children : string, size? : string, align? : any})
{
    if (size == null) {
        size = "3";
    }
    size += "rem";

    
    return (
        <h1 className={styles.title} style={{fontSize: size, textAlign: align}}>
            {children}
        </h1>
    )
}