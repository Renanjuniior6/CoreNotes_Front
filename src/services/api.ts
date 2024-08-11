import axios from "axios";

import { Task, CreateTask } from './api-types'

export class APIService {
    private static client = axios.create({
        baseURL: "http://localhost:3333"
    })

    static async getTasks(): Promise<Task[]> {
        const { data } = await APIService.client.get<Task[]>("/tasks")

        return data
    }

    static async createTask(createTaskData: CreateTask): Promise<Task> {
        const { data } = await APIService.client.post<Task>(
            "/tasks", 
            createTaskData,
        )

        return data
    }
}