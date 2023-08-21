'use client'

import { styled } from "styled-components";

const Background = styled.div`
    padding: 0;
    margin: 0;
    background-color: white;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Topper = styled.body`
    width: 100vw;
    height: 100vh;
    padding: 0;
    background-color: black;
    display: grid;
    grid-template-columns: 8vw 8vw 8vw 8vw 8vw 8vw 8vw 8vw 8vw 8vw;
    grid-template-rows: 45vh 45vh;
    justify-content: space-between;
    align-content: space-between;
    grid-gap: 10px;
`

export default function MainContainer({ children }: { children: React.ReactNode })
{
    return (
        <Topper>
            {children}
        </Topper>
    )
}