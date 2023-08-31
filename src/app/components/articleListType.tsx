export default interface ArticleList {
    title: string
    images: Image[]
    text: string[]
    link?: string
    languages?: string
}

export interface Image {
    src: string
    caption: string
}