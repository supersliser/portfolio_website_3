'use client'
import Background from "../components/backgroundContainer"
import ObjectContainer from '../components/objectContainer'
import Title from '../components/title'
import SocialsBox from '../components/socialsBox'
import ArticleList from '../components/articleList'
import ArticleListType from '../components/articleListType'
import SiteContainer from '../components/siteContainer'
import { useState } from 'react'
import data from "../renders/rendersData.json"
import HomeButton from '../components/homeButton'

export default function Programs() {
    const [item, setItem] = useState(Number);
    return (
    <Background>
        <ObjectContainer columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
            <HomeButton />
        </ObjectContainer>
        <ObjectContainer columnStart={2} columnEnd={8} rowStart={1} rowEnd={2}>
            <Title size="2">My mother has always been an artist. I saught to channel the passion she felt to such a subject however I have always been physically unable to write or draw with any amount of talent. However, I had a particular aptitude for computers. One evening I decided to watch the classic blender doughnut tutorial and found 3D modelling to be easy and enjoyable. Since then this has been my artform and my passion.</Title>
        </ObjectContainer>
        <ObjectContainer columnStart={8} columnEnd={11} rowStart={1} rowEnd={2}>
            <SocialsBox />
        </ObjectContainer>
        <ObjectContainer columnStart={1} columnEnd={3} rowStart={2} rowEnd={3}>
            <ArticleList data={data} itemSetter={setItem} currentIndex={item}/>
        </ObjectContainer>
        <ObjectContainer columnStart={3} columnEnd={11} rowStart={2} rowEnd={3}>
            <SiteContainer index={item} data={data}/>
        </ObjectContainer>
    </Background>
    )
}