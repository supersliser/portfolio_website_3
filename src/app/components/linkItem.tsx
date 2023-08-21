'use client'

import { styled } from "styled-components";
import Link from "next/link"

const LinkStyleItem = styled(Link)<{ $size?: number}>`
    text-decoration: none;
    color: white;
    font-size: ${props => props.$size || 2}rem;
    text-align: center;
`;

export default function LinkItem({ children, href, size }: {children: React.ReactNode, href: string, size: number}) {
    return (
        <LinkStyleItem href={href} $size={size}>
            {children}
        </LinkStyleItem>
    )
}