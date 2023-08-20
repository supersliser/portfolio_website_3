'use client'

import { styled } from "styled-components";
import Title from "./title";
import Image from 'next/image'


const ImageItem = styled(Image)`
    width: 50%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

const Container = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10%;
`

const TitleItem = styled(Title)`
    text-align: right;
`

export default function ImageContainer({ bigSubtitle, children, href }: {bigSubtitle?: boolean, children: string, href: string}) 
{
    let num: number = 1;
    if (bigSubtitle == true)
    {
        num = 3
    }
    return (
        <Container>
            <TitleItem size={num}>{children}</TitleItem>
            <ImageItem
                src={href} 
                alt="This image could not be displayed" 
                width={400} 
                height={400} />
        </Container>
    )
}