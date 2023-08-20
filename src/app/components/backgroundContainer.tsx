'use client'

import { styled } from "styled-components";

const Background = styled.div`
    padding: 0;
    margin: 0;
    background-color: white;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center
`

const Topper = styled.div`
    min-width: 80%;
    min-height: 80%;
    padding: 0;
    background-color: black;
    border-radius: 5px;
    border-color: #880494;
    border-width: 1px;
    border-style: solid;
    box-shadow: 5px 10px;
`

export default function MainContainer({ children }: { children: React.ReactNode })
{
    return (
        <Background>
            <Topper>
                {children}
            </Topper>
        </Background>
    )
}