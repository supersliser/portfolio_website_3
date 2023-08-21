'use client'

import { styled } from "styled-components";

const Container = styled.div<{$columnStart: number, $columnEnd: number, $rowStart: number, $rowEnd: number}>`
    border-radius: 20px;
    background-image: linear-gradient(to right, #242424, #141414);
    padding: 10px;
    grid-column-start: ${props => props.$columnStart};
    grid-column-end: ${props => props.$columnEnd};
    grid-row-start: ${props => props.$rowStart};
    grid-row: ${props => props.$rowEnd};
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function ObjectContainer({ children, columnStart, columnEnd, rowStart, rowEnd }: {children : React.ReactNode, columnStart: number, columnEnd: number, rowStart: number, rowEnd: number}) {
    return (
        <Container $columnStart={columnStart} $columnEnd={columnEnd} $rowStart={rowStart} $rowEnd={rowEnd}>
            {children}
        </Container>
    )
}