import { useCallback, useState } from 'react'
import { Container, TitleInput, TextNote, IconsBox, BottomBox, ContainerIcons } from "./styles";
import { PickColor } from '../pickColor'
import { PencilSimple, PaintBucket, X, Star } from '@phosphor-icons/react'
import { TasksProps } from '../../screen/home';
import { useForm } from 'react-hook-form'
import { theme } from '../../styles/theme'
import { updateTaskSchema } from '../../validators/schemas';
import { UpdateTaskData } from '../../validators/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { APIService } from '../../services/api'

export function NoteCard ({note}: TasksProps) {
    const [ modal, setModal ] = useState(false)
    const [ favorite, setFavorite ] = useState<string | undefined>()
    const [ edit, setEdit ] = useState<boolean>(true)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateTaskData>({
        defaultValues: {
            title: "",
            color: theme.colors.elipse5,
            favorite: false,
            text: ""
        }, resolver: zodResolver(updateTaskSchema)
    })

    function isActive(fill: string) {

        if (fill === favorite) {
            setFavorite("regular")
        } else {
            setFavorite(fill)
        }
      }

      const _id = note._id

      const onSubmit = useCallback( async (data: UpdateTaskData) => {
            await APIService.updateTask({...data, _id})
            console.log({...data, _id})
      }, []) 

      const deleteNote = async () => {
        await APIService.deleteTask({_id: _id})
        console.log({_id: _id})
      }

    return (
        <>
        <Container onSubmit={handleSubmit(onSubmit)} color={note.color}>
            <span>
                <TitleInput
                {...register("title")}
                placeholder="Título" 
                disabled={edit} 
                color={note.color} 
                defaultValue={note.title}>
                </TitleInput>
                <Star size={20} weight={favorite} onClick={() => isActive("fill") } />
            </span>
            <BottomBox>
                <TextNote 
                {...register("text")} 
                placeholder="Anotação..." 
                disabled={edit} 
                color={note.color} 
                defaultValue={note.text}>
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
        { modal && <PickColor setModal={setModal} /> }
        </>
    )
}