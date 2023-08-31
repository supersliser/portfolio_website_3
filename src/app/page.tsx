import Background from "./components/backgroundContainer"
import Title from './components/title'
import type { Metadata } from 'next'
import ImageContainer from './components/imageContainer'
import ObjectContainer from "./components/objectContainer"
import SocialsBox from "./components/socialsBox"
import LinkItem from "./components/linkItem"
import BigLink from "./components/bigLink"
 

export const metadata: Metadata = {
  title: 'Home - TL Portfolio',
  description: "The homepage for Thomas Lower's Portfolio",
}

export default function Home() {
  return (
<Background>
  <ObjectContainer columnStart={1} columnEnd={3} rowStart={1} rowEnd={1}>
    <SocialsBox />
  </ObjectContainer>
  <ObjectContainer columnStart={3} columnEnd={11} rowStart={1} rowEnd={1}>
    <ImageContainer bigSubtitle href='https://cdn.discordapp.com/attachments/873374731372494859/1142879708376223865/Headshot-Reversed.jpg'>
      Hi, my name is Tom.
    </ImageContainer>
  </ObjectContainer>
  <ObjectContainer columnStart={1} columnEnd={11} rowStart={2} rowEnd={2}>
    <Title size="4">I'm a Programmer & 3D Artist.</Title>
  </ObjectContainer>
  <ObjectContainer columnStart={1} columnEnd={11} rowStart={3} rowEnd={3}>
  <LinkItem href="./programs/" size="2">
      Programs
    </LinkItem>
    <LinkItem href="./renders/" size="2">
      3D Models
    </LinkItem>
  </ObjectContainer>
  <ObjectContainer columnStart={1} columnEnd={6} rowStart={4} rowEnd={5}>
    <BigLink link="./programs/" />
  </ObjectContainer>
  <ObjectContainer columnStart={6} columnEnd={11} rowStart={4} rowEnd={5}>
    <BigLink link="./renders/" />
  </ObjectContainer>
</Background>
  )
}
