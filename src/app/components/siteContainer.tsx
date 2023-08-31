import { ReactNode } from "react"
import styles from "../styles/siteContainer.module.css"
import type ArticleListType from "./articleListType"
import type { Image } from "./articleListType"
import Title from "./title"
import ImageItem from "next/image"
import LinkItem from "./linkItem"

export default function SiteContainer({index, data}: {index: number, data: ArticleListType[]}) {
    console.log(index)
    let items: ReactNode[] = new Array;

    for (var i = 0; i < data[index].images.length; i++) {
        console.log(i)
        items.push(<ImageTextCombo key={i} text={data[index].text[i]} image={data[index].images[i]} />)
    }

    let languages: string = ""
    if (data[index].languages != null) [
        languages = "This was made in " + data[index].languages
    ]
    return (
        <div className={styles.frameItem}>
            <Title size="4" align="center">{data[index].title}</Title>
            {
            data[index].languages != null &&
            <Title size="1" align="center">
                {languages}
            </Title>}
            {items.map((x) => x)}
            {data[index].link != null && <LinkItem href={data[index].link}>Please click here to access this project</LinkItem>}
        </div>
    )
}

function ImageTextCombo({text, image}: {text: string, image: Image}) {
    return (
        <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
            <Title size="1">{text}</Title>
            <div>
                <ImageItem style={{margin:"5%"}} src={image.src} alt={"The image " + image.caption + " could not be displayed"} width={300} height={200} />
                <Title size="0.5">{image.caption}</Title>
            </div>
        </div>
    )
}