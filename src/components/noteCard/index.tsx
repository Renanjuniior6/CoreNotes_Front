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
import { Button } from '../button';

import { useFetchAPI } from '../../hooks/useFetchAPI'

export function NoteCard ({ note }: TasksProps) {
    const [ modal, setModal ] = useState(false)
    const [ favorited, setFavorited ] = useState<boolean>()
    const [ edit, setEdit ] = useState<boolean>(true)

    const _id = note._id

    const { updateTask, deleteTask } = useFetchAPI()

    const {
        register,
        handleSubmit,
    } = useForm<UpdateTaskData>({
        defaultValues: {
            title: note.title,
            color: theme.colors.white,
            favorite: false,
            text: note.text
        }, resolver: zodResolver(updateTaskSchema)
    })

     function isActive (fill: boolean) {

        if (fill === favorited) {

            setFavorited(false)

            const favorite = false
            
            updateTask({favorite, _id})
        } else {
            setFavorited(true)

            const favorite = true

            updateTask({favorite, _id})
        }
      }

      function isEditing (edited: boolean) {

        if (edited === edit) {
            setEdit(true)
        } else {
            setEdit(false)
        }
      }

      const updateNote = useCallback( (data: UpdateTaskData) => {

            data.favorite = favorited

           updateTask({...data, _id})

      }, [_id, updateTask, favorited]) 

      const deleteNote = async () => {
        deleteTask({_id})
      }

      useEffect(() => {
       
        setFavorited(note.favorite)
      }, [note.favorite, setFavorited])
      

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
                <Star size={20} weight={favorited ? "fill" : "regular"} onClick={() => isActive(true) } />
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
                        <PencilSimple size={20} onClick={() => isEditing(false)} />
                        <PaintBucket size={20} onClick={() => setModal(true)} />
                    </IconsBox>
                    <X size={20} onClick={deleteNote}/>
                </ContainerIcons>
            </BottomBox>
            { edit === false && <Button type='submit'>Salvar</Button>}
        </Container>
        { modal && <PickColor _id={_id} setModal={setModal} /> }
    </Content>
    )
}