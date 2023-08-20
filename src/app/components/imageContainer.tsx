'use client'

import { styled } from "styled-components";
import Title from "./title";
import Image from 'next/image'


const ContainerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin: 10%;
    flex-wrap: nowrap;
`

const ImageItem = styled(Image)`
    border-radius: 20px;
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
            <ContainerItem>
                <Title align="center" size={num}>{children}</Title>
            </ContainerItem>
            <ContainerItem>
                <ImageItem
                    src={href} 
                    alt="This image could not be displayed"
                    width={400}
                    height={400}
                />
            </ContainerItem>
        </Container>
    )
}