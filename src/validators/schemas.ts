import { z } from 'zod'

export const createTaskSchema = z.object({
    title: z.string().min(1, "Deve conter pelo menos 1 caractere").max(50),
    text: z.string().min(1, "Deve conter pelo menos 1 caractere"),
    favorite: z.boolean().optional(),
    color: z.string()
})

export const updateTaskSchema = z.object({
    title: z.string().min(1, "Deve conter pelo menos 1 caractere").max(50).optional(),
    text: z.string().min(1, "Deve conter pelo menos 1 caractere").optional(),
    favorite: z.boolean().optional(),
    color: z.string().optional()
})