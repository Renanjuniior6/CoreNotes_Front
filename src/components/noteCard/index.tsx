import { useCallback, useEffect, useState } from 'react'
import { Container, TitleInput, TextNote, IconsBox, BottomBox, ContainerIcons, Content } from "./styles";
import { PickColor } from '../pickColor'
import { PencilSimple, PaintBucket, X, Star } from '@phosphor-icons/react'
import { TasksProps } from '../../screen/home';
import { useForm } from 'react-hook-form'
import { theme } from '../../styles/theme'
import { updateTaskSchema } from '../../validators/schemas';
import { UpdateTaskData } from '../../validators/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { APIService } from '../../services/api'

export function NoteCard ({ note }: TasksProps) {
    const [ modal, setModal ] = useState(false)
    const [ fillFavorite, setFillFavorite ] = useState<string | undefined>()
    const [ favorite, setFavorite ] = useState<boolean>()
    const [ edit, setEdit ] = useState<boolean>(true)
    const [ selectedColor, setSelectedColor ] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateTaskData>({
        defaultValues: {
            title: note.title,
            color: theme.colors.white,
            favorite: false,
            text: note.text
        }, resolver: zodResolver(updateTaskSchema)
    })

    function isActive(fill: string) {

        if (fill === fillFavorite) {
            setFillFavorite("regular")
            setFavorite(false)
        } else {
            setFillFavorite(fill)
            setFavorite(true)
        }
      }

      const _id = note._id

      const updateNote = useCallback( async (data: UpdateTaskData) => {

        const color = selectedColor

          data.color = color

        const favorited = favorite

          data.favorite = favorited

            await APIService.updateTask({...data, _id})

            // location.reload()

      }, [selectedColor,_id, favorite]) 

      const deleteNote = async () => {
        await APIService.deleteTask({_id})
      }

      useEffect(() => {
       
        setFavorite(note.favorite)
      }, [])
      

    return (
    <Content>
        <Container onSubmit={handleSubmit(updateNote)} color={note.color}>
            <span>
                <TitleInput
                {...register("title")}
                placeholder="Título" 
                disabled={edit} 
                color={note.color}>
                </TitleInput>
                <Star size={20} weight={favorite ? "fill" : "regular"} onClick={() => isActive("fill") } />
            </span>
            <BottomBox>
                <TextNote 
                {...register("text")} 
                placeholder="Anotação..." 
                disabled={edit} 
                color={note.color}>
                </TextNote>
                <ContainerIcons>
                    <IconsBox>
                        <PencilSimple size={20} onClick={() => setEdit(false)} />
                        <PaintBucket size={20} onClick={() => setModal(true)} />
                    </IconsBox>
                    <X size={20} onClick={deleteNote}/>
                </ContainerIcons>
            </BottomBox>
            <button type='submit'>Salvar</button>
        </Container>
        { modal && <PickColor setSelectedColor={setSelectedColor} setModal={setModal} /> }
    </Content>
    )
}