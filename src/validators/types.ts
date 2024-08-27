import { z } from "zod"

import { createTaskSchema, updateTaskSchema } from "./schemas"

export type CreateTaskData = z.infer<typeof createTaskSchema>

export type UpdateTaskData = z.infer<typeof updateTaskSchema>
