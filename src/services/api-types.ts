export type Task = {
    _id: string
    title: string 
    color: string
    favorite: boolean
    text: string
}

export type CreateTask = {
    title: string 
    color: string
    favorite?: boolean
    text: string
}

export type UpdateTask = {
    _id?: string
    title?: string 
    color?: string
    favorite?: boolean
    text?: string
}

export type DeleteTask = {
    _id: string
}