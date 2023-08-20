'use client'

import Background from "./components/backgroundContainer"
import Title from './components/title'
import type { Metadata } from 'next'
import ImageContainer from './components/imageContainer'
import { styled } from "styled-components"
import ObjectContainer from "./components/objectContainer"
import SocialsBox from "./components/socialsBox"
 

export const metadata: Metadata = {
  title: 'Home - TL Portfolio',
  description: "The homepage for Thomas Lower's Portfolio",
}

const NameContainer = styled.div`
  width: 70%;
`

const SocialsContainer = styled.div`
  width: 30%;
`

const TextContainer1 = styled.div`
  width: 100%;
`

export default function Home() {
  return (
<Background>
  <SocialsContainer>
    <SocialsBox />
  </SocialsContainer>
  <NameContainer>
    <ImageContainer bigSubtitle href='https://cdn.discordapp.com/attachments/873374731372494859/1142879708376223865/Headshot-Reversed.jpg'>
      Hi, my name is Tom.
    </ImageContainer>
  </NameContainer>
  <TextContainer1>
    <ObjectContainer>
        <Title size={4}>I'm a Programmer & 3D Artist.</Title>
    </ObjectContainer>
  </TextContainer1>
</Background>
  )
}
