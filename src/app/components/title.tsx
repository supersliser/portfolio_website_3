'use client'

import { styled } from "styled-components";
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';

const TitleStyle = styled.h1<{ $size? : number, $align? : string}>`
    color: white;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: ${props => props.$size || 5}rem;
    text-align: ${props => props.$align || "center"};
    position: relative;
`;

export default function Title({ children, size, align } : {children : string, size? : number, align? : string})
{
    return (
        <TitleStyle $size={size} $align={align}>
            {children}
        </TitleStyle>
    )
}