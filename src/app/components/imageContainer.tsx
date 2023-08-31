import styles from "../styles/imageContainer.module.css"

import Title from "./title";
import Image from 'next/image'
import ObjectContainer from "./objectContainer"

export default function ImageContainer({ bigSubtitle, children, href, smallImage }: {bigSubtitle?: boolean, children: string, href: string, smallImage?: boolean}) 
{
    let num: string = "1";
    if (bigSubtitle)
    {
        num = "5"
    }
    let imageSize: number = 400
    if (smallImage) {
        imageSize = 40
    }
    return (
        <div className={styles.Container}>
                <Title align="right" size={num}>{children}</Title>
                <Image
                    style={{borderRadius:"20px"}}
                    src={href}
                    alt="This image could not be displayed"
                    width={imageSize}
                    height={imageSize}
                />
        </div>
    )
}