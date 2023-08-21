'use client'

import { styled } from "styled-components";
import Title from "./title";
import Image from 'next/image'
import ObjectContainer from "./objectContainer"

const Container = styled.div`
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: end;
    flex-wrap: nowrap;
`

const ContainerItem = styled.div`
    width: 100%;
`

export default function ImageContainer({ bigSubtitle, children, href, columnStart, columnEnd, rowStart, rowEnd }: {bigSubtitle?: boolean, children: string, href: string, columnStart: number, columnEnd: number, rowStart: number, rowEnd: number}) 
{
    let num: number = 1;
    if (bigSubtitle == true)
    {
        num = 5
    }
    return (
        <ObjectContainer columnStart={columnStart} columnEnd={columnEnd} rowStart={rowStart} rowEnd={rowEnd} >
            <ContainerItem>
                <Title align="right" size={num}>{children}</Title>
            </ContainerItem>
                <Image
                    style={{borderRadius:"20px"}}
                    src={href}
                    alt="This image could not be displayed"
                    width={400}
                    height={400}
                />
        </ObjectContainer>
    )
}