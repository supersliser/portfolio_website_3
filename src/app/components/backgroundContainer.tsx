'use client'

import { styled } from "styled-components";

const Topper = styled.main`
    padding: 0;
    margin: 0;
    background-color: black;
    display: grid;
    justify-content: space-around;
    align-content: space-around;
    grid-gap: 0px;
`;

export default function MainContainer({ children }: { children: React.ReactNode })
{
    return (
        <Topper>
            {children}
        </Topper>
    )
}