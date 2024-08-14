import { ReactNode } from "react"
import { Container } from "./styles"

type ChildrenProps = {
    children: ReactNode
    props: string
}

export function Button ({children, ...props}: ChildrenProps) {
    return (
        <Container {...props}>{children}</Container>
    ) 
}