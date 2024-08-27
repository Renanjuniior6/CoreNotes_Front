import { Header } from '../../components/header'
import { CreateNoteCard } from '../../components/createNoteCard'
import { NoteCard } from '../../components/noteCard'

import { Content } from './styles'
import { useEffect, useState } from 'react'
import { Task } from '../../services/api-types'

import { useFetchAPI } from '../../hooks/useFetchAPI'

export function Home () {
    const [ noFavoritedTasks, setNoFavoritedTasks ] = useState<Task[]>([])
    const [ favoritedTasks, setFavoritedTasks ] = useState<Task[]>([])
    const [ filteredTask, setFilteredTask ] = useState<Task[]>([])

    const { tasks, fetchTasks } = useFetchAPI()

    useEffect( () => {
        async function getTasks () {

            await fetchTasks()

            const favoriteNotes = tasks?.filter((item) => item.favorite === true)
            const noFavoriteNotes = tasks?.filter((item) => item.favorite === false)

            setNoFavoritedTasks(noFavoriteNotes)
            setFavoritedTasks(favoriteNotes)
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
                       favoritedTasks && favoritedTasks.map((item) => (
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