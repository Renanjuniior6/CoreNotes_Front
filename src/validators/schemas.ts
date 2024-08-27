import { z } from 'zod'

export const createTaskSchema = z.object({
    title: z.string().min(1).max(50),
    text: z.string().min(1),
    favorite: z.boolean().optional(),
    color: z.string()
})

export const updateTaskSchema = z.object({
    title: z.string().min(1).max(50).optional(),
    text: z.string().min(1).optional(),
    favorite: z.boolean().optional(),
    color: z.string().optional()
})