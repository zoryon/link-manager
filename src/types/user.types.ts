import { users } from "@/generated/prisma";

export type PublicUser = Omit<users, "password">;