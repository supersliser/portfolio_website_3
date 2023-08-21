'use client'

import { styled } from "styled-components";

const Topper = styled.body`
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-color: black;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
    grid-template-rows: auto auto;
    justify-content: space-around;
    align-content: space-around;
    grid-gap: 0px;
`

export default function MainContainer({ children }: { children: React.ReactNode })
{
    return (
        <Topper>
            {children}
        </Topper>
    )
}