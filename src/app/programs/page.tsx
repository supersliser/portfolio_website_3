'use client'
import Background from "../components/backgroundContainer"
import ObjectContainer from '../components/objectContainer'
import Title from '../components/title'
import SocialsBox from '../components/socialsBox'
import ArticleList from '../components/articleList'
import ArticleListType from '../components/articleListType'
import SiteContainer from '../components/siteContainer'
import { useState } from 'react'
import data from "../programs/programsData.json"
import HomeButton from '../components/homeButton'

export default function Programs() {
    const [item, setItem] = useState(Number);
    return (
    <Background>
        <ObjectContainer columnStart={1} columnEnd={2} rowStart={1} rowEnd={2}>
            <HomeButton />
        </ObjectContainer>
        <ObjectContainer columnStart={2} columnEnd={8} rowStart={1} rowEnd={2}>
            <Title size="2">I have been programming since I was a child. I have always found pleasure and joy in understanding the way that machines and systems work behind the scenes. My personal favourite programming language is C#.NET although I have experience in many other languages such as Kotlin, VB.NET, C++, HTML, CSS, JS, TS and Lua as well as multiple frameworks such as ASP.NET, AstroJS and Next.JS.</Title>
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