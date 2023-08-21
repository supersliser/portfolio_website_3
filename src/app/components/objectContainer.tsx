'use client'

import { styled } from "styled-components";

const ObjectContainerItem = styled.div<{$columnStart: number, $columnEnd: number, $rowStart: number, $rowEnd: number}>`
    position: static;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
    background-image: linear-gradient(to right, #2b2b2b, #090909);
    grid-column-start: ${props => props.$columnStart};
    grid-column-end: span ${props => props.$columnEnd};
    grid-row-start: ${props => props.$rowStart};
    grid-row-end: span ${props => props.$rowEnd};
`;

const Floater = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default function ObjectContainer({ children, columnStart, columnEnd, rowStart, rowEnd }: {children : React.ReactNode, columnStart: number, columnEnd: number, rowStart: number, rowEnd: number}) {
    return (
        <ObjectContainerItem $columnStart={columnStart} $columnEnd={columnEnd} $rowStart={rowStart} $rowEnd={rowEnd}>
            <Floater>
                {children}
            </Floater>
        </ObjectContainerItem>
    )
}