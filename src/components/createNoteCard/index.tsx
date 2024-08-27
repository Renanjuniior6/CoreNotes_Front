import { Container, TitleInput, TextNote } from "./styles";
import { Star } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { CreateTaskData } from "../../validators/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTaskSchema } from "../../validators/schemas";
import { useCallback } from "react";
import { theme } from '../../styles/theme'
import { useState } from 'react'
import { Button } from "../button";
import { toast } from 'react-toastify'

import { useFetchAPI } from '../../hooks/useFetchAPI'

export function CreateNoteCard() {
    const [ favorite, setFavorite ] = useState<boolean>()
    const { createTask } = useFetchAPI()

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<CreateTaskData>({
        defaultValues: {
            title: "",
            color: theme.colors.white,
            favorite: false,
            text: ""
        }, resolver: zodResolver(createTaskSchema)
    })

    function isFavorited(value: boolean) {

        if (value === favorite) {
            setFavorite(false)
        } else {
            setFavorite(true)
        }
      }

    const createNote = useCallback((data: CreateTaskData) => {

        if(favorite) {
            data.favorite = favorite
        }

       createTask(data)

       reset()

       setFavorite(false)

       toast.success("Nota adicionada!")

    },[favorite, createTask, reset])
   
    return (
            <Container onSubmit={handleSubmit(createNote)}>
                <span>
                    <TitleInput placeholder="Título" {...register("title")} />
                    <Star size={20} weight={favorite ? "fill" : "regular"} onClick={() => isFavorited(true)} />
                </span>
                    <TextNote 
                    placeholder="Criar nota..." 
                    {...register("text")}
                    >
                    </TextNote>
                    <Button $width={true} type="submit">Criar</Button>
            </Container>
    )
}