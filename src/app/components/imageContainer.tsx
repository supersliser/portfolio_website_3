import styles from "../styles/imageContainer.module.css"

import Title from "./title";
import Image from 'next/image'
import ObjectContainer from "./objectContainer"

export default function ImageContainer({ bigSubtitle, children, href }: {bigSubtitle?: boolean, children: string, href: string }) 
{
    let num: string = "1";
    if (bigSubtitle == true)
    {
        num = "5"
    }
    return (
        <div className={styles.Container}>
                <Title align="right" size={num}>{children}</Title>
                <Image
                    style={{borderRadius:"20px"}}
                    src={href}
                    alt="This image could not be displayed"
                    width={400}
                    height={400}
                />
        </div>
    )
}