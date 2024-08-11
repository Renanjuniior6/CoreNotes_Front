import { Container, TitleInput, TextNote, IconsBox, BottomBox, ContainerIcons } from "./styles";
import { PencilSimple, PaintBucket, X, Star } from '@phosphor-icons/react'

export function NoteCard () {
    return (
        <Container>
            <span>
                <TitleInput placeholder="Título"/>
                <Star size={20} />
            </span>
            <BottomBox>
                <TextNote placeholder="Anotação..."></TextNote>
                <ContainerIcons>
                <IconsBox>
                <PencilSimple size={20} />
                <PaintBucket size={20} />
                </IconsBox>
                <X size={20} />
                </ContainerIcons>
            </BottomBox>
        </Container>
    )
}