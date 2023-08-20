'use client'

import { styled } from "styled-components";
import Title from "./title";
import Image from 'next/image'
import ObjectContainer from "./objectContainer"

import githubImage from "../images/github.png"
import instagramImage from "../images/instagram.png"
import linkedinImage from "../images/linkedin.png"
import twitterImage from "../images/twitter.png"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-top: 10%;
    margin-bottom: 10%;
`

export default function SocialsBox() {
    return (
        <ObjectContainer>
            <Container>
                <ImageContainer>
                    <Image 
                        src={twitterImage}
                        alt="This image could not be displayed"
                        width={100}
                        height={100} 
                    />
                </ImageContainer>                
                <ImageContainer>
                    <Image 
                        src={instagramImage}
                        alt="This image could not be displayed"
                        width={100}
                        height={100} 
                    />
                </ImageContainer>
                <ImageContainer>
                    <Image 
                        src={linkedinImage}
                        alt="This image could not be displayed"
                        width={100}
                        height={100} 
                    />
                </ImageContainer>
                <ImageContainer>
                    <Image 
                        src={githubImage}
                        alt="This image could not be displayed"
                        width={100}
                        height={100} 
                    />
                </ImageContainer>
            </Container>
        </ObjectContainer>
    )
}