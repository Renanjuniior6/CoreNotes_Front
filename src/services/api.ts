import axios from "axios"

import { Task, CreateTask, UpdateTask, DeleteTask } from "./api-types"

export class APIService {
  private static client = axios.create({
    baseURL: "http://localhost:3333",
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

  static async updateTask(updateTaskData: UpdateTask): Promise<void> {
    await APIService.client.put<UpdateTask>("/tasks", updateTaskData)
  }

  static async deleteTask(deleteTaskData: DeleteTask): Promise<void> {
    await APIService.client.delete<DeleteTask>("/tasks", {
      data: deleteTaskData,
    })
  }
}
