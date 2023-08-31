import styles from "../styles/articleList.module.css"
import type ArticleListType from "./articleListType"
import ArticleList from "./articleListType"
import Title from "./title";
import Image from 'next/image'

export default function ArticleList({itemSetter, currentIndex, data} : {itemSetter: any, currentIndex: number, data: ArticleListType[]}) {
    return (
        <div className={styles.Container}>
            {data.map((article) => 
                    <ImageContainer key={data.indexOf(article)} selected={currentIndex==data.indexOf(article)} index={data.indexOf(article)} itemSetter={itemSetter} href={article.images[0].src}>
                        {article.title}
                    </ImageContainer>
                )}
        </div>
    )
}

function ImageContainer({children, href, itemSetter, selected, index}: {children: string, href: string, itemSetter: any, selected: boolean, index: number}) {
    let num: string = "1";
    let imageSize: number = 80
    if (selected) {
        console.log(index)
        return (
            <div className={styles.ImageContainerThing} style={{borderWidth:"1px", borderColor:"white"}} onClick={() => itemSetter(index)}>
                <Image
                    style={{borderRadius:"5px"}}
                    src={href}
                    alt="This image could not be displayed"
                    width={imageSize}
                    height={imageSize}
                />
                <div className={styles.TextContainer}>
                    <Title align="right" size={num}>{children}</Title>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.ImageContainerThing} onClick={() => itemSetter(index)}>
                <Image
                    style={{borderRadius:"5px"}}
                    src={href}
                    alt="This image could not be displayed"
                    width={imageSize}
                    height={imageSize}
                />
                <div className={styles.TextContainer}>
                    <Title align="right" size={num}>{children}</Title>
                </div>
            </div>
        )           
    }
}