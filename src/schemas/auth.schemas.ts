import { users_role } from "@/generated/prisma";
import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(3).max(60)
})

export const createUserSchema = userSchema.merge(
  z.object({
    role: z.enum([users_role.ADMIN, users_role.USER]),
    passwordConfirmation: z.string(),
  })
).refine((data) => data.password === data.passwordConfirmation, {
  message: "Password confirmation does not match password",
  path: ["passwordConfirmation"],
});