import { Header } from '../../components/header'
import { CreateNoteCard } from '../../components/createNoteCard'
import { NoteCard } from '../../components/noteCard'

import {Content} from './styles'
import { useEffect, useState } from 'react'
import { APIService } from '../../services/api'

export type TasksProps = {
    _id: string
    title: string
    color: string
    favorite: boolean
    text: string
}


export function Home () {
    const [ tasks, setTasks ] = useState<TasksProps[]>()

    useEffect( () => {
        async function fetchTasks () {
            const data = await APIService.getTasks()

            setTasks(data)
        }
       fetchTasks()
      }, [])

    return (
        <Content>
            <Header />
            <CreateNoteCard />
            <main>
                {tasks && tasks.map((item) => (
                    <NoteCard key={item._id} note={item}/>
                ))}
            </main>
        </Content>
    )
   
}