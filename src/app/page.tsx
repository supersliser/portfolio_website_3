import Image from 'next/image'
import styles from './page.module.css'
import Background from "./components/backgroundContainer"
import Title from './components/title'
import type { Metadata } from 'next'
import ImageContainer from './components/imageContainer'
 

export const metadata: Metadata = {
  title: 'Home - TL Portfolio',
  description: "The homepage for Thomas Lower's Portfolio",
}

export default function Home() {
  return (
<Background>
    <Title align='center' size={5}>Thomas Lower's Personal Portfolio</Title>
    <ImageContainer bigSubtitle href='https://cdn.discordapp.com/attachments/873374731372494859/1142879708376223865/Headshot-Reversed.jpg'>Hi, My name is Tom</ImageContainer>
</Background>
  )
}
