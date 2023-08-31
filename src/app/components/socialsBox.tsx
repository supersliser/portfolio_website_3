import styles from "../styles/socials.module.css"
import Image from 'next/image'
import ObjectContainer from "./objectContainer"
import LinkItem from "./linkItem"

import githubImage from "../images/github.png"
import instagramImage from "../images/instagram.png"
import linkedinImage from "../images/linkedin.png"
import twitterImage from "../images/twitter.png"

export default function SocialsBox() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <LinkItem href="https://twitter.com/superslise58101">
                    <img
                        src={twitterImage.src}
                        alt="This image could not be displayed"
                        className={styles.imageItem}
                    />
                </LinkItem>
            </div>
            <div className={styles.imageContainer}>
                <LinkItem href="https://www.instagram.com/supersliserrrr/">
                    <img
                        src={instagramImage.src}
                        alt="This image could not be displayed"
                        className={styles.imageItem}
                    />
                </LinkItem>
            </div>
            <div className={styles.imageContainer}>
                <LinkItem href="https://www.linkedin.com/in/thomas-lower-234836245/">
                    <img
                        src={linkedinImage.src}
                        alt="This image could not be displayed"
                        className={styles.imageItem}
                    />
                </LinkItem>
            </div>
            <div className={styles.imageContainer}>
                <LinkItem href="https://github.com/supersliser">
                    <img
                        src={githubImage.src}
                        alt="This image could not be displayed"
                        className={styles.imageItem}
                    />
                </LinkItem>
            </div>
        </div>
    )
}