/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useCallback, useState, ReactNode } from 'react'

import { APIService } from '../services/api'

import { DeleteTask, Task, UpdateTask } from '../services/api-types'
import { CreateTaskData } from '../validators/types'

interface FetchAPIProps {
    createTask: (data: CreateTaskData) => Promise<void>
    updateTask: (data: UpdateTask) => Promise<void>
    deleteTask: (data: DeleteTask) => Promise<void>
    fetchTasks: () => Promise<void>
    tasks: Task[]
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps)

type FecthAPIProviderProps = {
    children: ReactNode
}

export function FetchAPIProvider( { children }: FecthAPIProviderProps ) {
    const [ tasks, setTasks ] = useState<Task[]>([])

    const createTask = useCallback( async (data: CreateTaskData) => {
        await APIService.createTask(data)
    }, [])

    const fetchTasks = useCallback(async () => {
        const data = await APIService.getTasks()

        setTasks(data)
    }, [])

    const updateTask = useCallback( async (data: UpdateTask) => {

        await APIService.updateTask(data)

    }, [])

    const deleteTask = useCallback(async (data: DeleteTask) => {
        await APIService.deleteTask(data)
    } ,[])

    return (
        <FetchAPIContext.Provider 
        value={{fetchTasks, createTask, updateTask, deleteTask, tasks }}>
            {children}
        </FetchAPIContext.Provider>
    )
}

export function useFetchAPI(): FetchAPIProps {
    return useContext(FetchAPIContext)
}