import { Container, TitleInput, TextNote } from "./styles";
import { Star } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { CreateTaskData } from "../../validators/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTaskSchema } from "../../validators/schemas";
import { useCallback } from "react";
import { APIService } from "../../services/api";
import { theme } from '../../styles/theme'

export function CreateNoteCard() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateTaskData>({
        defaultValues: {
            title: "",
            color: theme.colors.white,
            favorite: false,
            text: ""
        }, resolver: zodResolver(createTaskSchema)
    })

    // const createNote = (event: { key: string; }) => {
    //     if(event.key === 'Enter') {

    //     }
    // }

    const onSubmit = useCallback( async (data: CreateTaskData) => {
    //   await APIService.createTask(data)
        console.log(data)
    },[])
   
    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <span>
                <TitleInput placeholder="Título" {...register("title")} />
                <Star size={20} />
            </span>
                <TextNote 
                placeholder="Criar nota..." 
                {...register("text")}
                >
                </TextNote>
                <button type="submit">Criar</button>
        </Container>
    )
}