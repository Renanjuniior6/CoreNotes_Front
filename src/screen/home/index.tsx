import { Header } from '../../components/header'
import { CreateNoteCard } from '../../components/createNoteCard'
import { NoteCard } from '../../components/noteCard'

import { Content } from './styles'
import { useEffect, useState } from 'react'

import { useFetchAPI } from '../../hooks/useFetchAPI'

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
    const [ filteredTask, setFilteredTask ] = useState<TasksProps[]>([])

    const { tasks, fetchTasks } = useFetchAPI()

    useEffect( () => {
        async function getTasks () {

            await fetchTasks()

            const favoriteNotes = tasks?.filter((item) => item.favorite === true)
            const notes = tasks?.filter((item) => item.favorite === false)

            setNoFavoritedTasks(notes)
            setFavoriteTasks(favoriteNotes)
        }
       getTasks()
      }, [fetchTasks, tasks])


    return (
    <main>
      <Header setFilteredTask={setFilteredTask} />
        {filteredTask! && filteredTask?.length === 0 && <CreateNoteCard />}
            <Content>
                <section>
                  {filteredTask! && filteredTask?.length === 0 &&
                       favoriteTasks && favoriteTasks.map((item) => (
                            <NoteCard key={item._id} note={item} /> 
                        ))}
                </section>

                    <section>
                    {filteredTask! && filteredTask?.length === 0 &&
                        noFavoritedTasks && noFavoritedTasks.map((item) => (
                              <NoteCard key={item._id} note={item} />
                        ))}
                    </section>

                   {filteredTask && filteredTask?.map((item) => (
                    <section style={{ marginTop: "5.0625rem" }}>
                        <NoteCard key={item._id} note={item} /> 
                    </section>         
                    ))}
              
            </Content>
    </main>
    )
   
}