import { Container, TitleInput, TextNote } from "./styles";
import { Star } from '@phosphor-icons/react'

export function CreateNoteCard() {
    return (
        <Container>
            <span>
            <TitleInput placeholder="Título"/>
            <Star size={20} />
            </span>
            <TextNote placeholder="Criar nota..."></TextNote>
        </Container>
    )
}