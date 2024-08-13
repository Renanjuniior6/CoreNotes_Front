import { Header } from '../../components/header'
import { CreateNoteCard } from '../../components/createNoteCard'
import { NoteCard } from '../../components/noteCard'

import { Content, Container } from './styles'
import { useEffect, useState } from 'react'
import { APIService } from '../../services/api'
import { Task } from '../../services/api-types'

export type TasksProps = {
    _id: string
    title: string
    color: string
    favorite: boolean
    text: string
}

export function Home () {
    const [ noFavoritedTasks, setNoFavoritedTasks ] = useState<TasksProps[]>()
    const [ favoriteTasks, setFavoriteTasks ] = useState<TasksProps[]>()
    const [ allTasks, setAllTasks ] = useState<Task[] | undefined>()

    useEffect( () => {
        async function fetchTasks () {
            const data = await APIService.getTasks()

            const favoriteNotes = data.filter((item) => item.favorite === true)
            const notes = data.filter((item) => item.favorite === false)

            setNoFavoritedTasks(notes)
            setFavoriteTasks(favoriteNotes)
            setAllTasks(data)
        }
       fetchTasks()
      }, [])

    return (
    <Container>
        <Header tasks={allTasks} setTasks={setAllTasks} />
        <CreateNoteCard />
            <Content>
                <section>
                  {allTasks! && allTasks?.length > 1 &&
                       favoriteTasks && favoriteTasks.map((item) => (
                            <NoteCard key={item._id} note={item} /> 
                        ))}
                </section>

                    <main>
                    {allTasks! && allTasks?.length > 1 &&
                        noFavoritedTasks && noFavoritedTasks.map((item) => (
                              <NoteCard key={item._id} note={item} />
                        ))}
                    </main>

                   {allTasks && allTasks?.length === 1 && allTasks?.map((item) => (
                    <section>
                        <NoteCard key={item._id} note={item} /> 
                    </section>         
                    ))}
              
            </Content>
    </Container>
    )
   
}