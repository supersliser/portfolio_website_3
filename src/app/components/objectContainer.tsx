'use client'

import { styled } from "styled-components";

const Container = styled.div`
    height: auto;
    border-radius: 20px;
    background-image: linear-gradient(to right, #242424, #141414);
    padding: 2%;
    margin: 2%;
    width: auto;
`

export default function ObjectContainer({ children }: {children : React.ReactNode}) {
    return (
        <Container>
            {children}
        </Container>
    )
}