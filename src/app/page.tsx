import Background from "./components/backgroundContainer"
import Title from './components/title'
import type { Metadata } from 'next'
import ImageContainer from './components/imageContainer'
import ObjectContainer from "./components/objectContainer"
import SocialsBox from "./components/socialsBox"
 

export const metadata: Metadata = {
  title: 'Home - TL Portfolio',
  description: "The homepage for Thomas Lower's Portfolio",
}

export default function Home() {
  return (
<Background>
  <SocialsBox columnStart={1} columnEnd={3} rowStart={1} rowEnd={1} />
  <ImageContainer columnStart={4} columnEnd={10} rowStart={1} rowEnd={1} bigSubtitle href='https://cdn.discordapp.com/attachments/873374731372494859/1142879708376223865/Headshot-Reversed.jpg'>
    Hi, my name is Tom.
  </ImageContainer>
  <ObjectContainer columnStart={1} columnEnd={10} rowStart={2} rowEnd={2}>
      <Title size={4}>I'm a Programmer & 3D Artist.</Title>
  </ObjectContainer>
</Background>
  )
}
