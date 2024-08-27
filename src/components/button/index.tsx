import { ReactNode } from "react"
import { Container } from "./styles"

type ChildrenProps = {
    children: ReactNode
    type?: "submit"
    $width?: boolean
}

export function Button ({children, ...props}: ChildrenProps) {
    return (
        <Container {...props}>{children}</Container>
    ) 
}