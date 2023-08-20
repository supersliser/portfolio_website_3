'use client'

import { styled } from "styled-components";
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Title({ children, size } : {children : string, size? : number})
{
    const TitleStyle = styled.h1<{ size? : number}>`
     color: white;
     font-family: 'DM Sans', sans-serif;
     font-weight: 700;
     font-size: ${props => props.size || 5}rem;
`

    return (
        <Container>
            <TitleStyle size={size}>
                {children}
            </TitleStyle>
        </Container>
    )
}