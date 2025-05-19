import { users_role } from "@/generated/prisma";
import { generatePrismaClient } from "./db";
import { verifySession } from "./session";
import { AuthenticationError, AuthorizationError } from "./custom-errors";

export async function isAdmin(userId: number) {
    // No try/catch - let errors propagate
    const prisma = generatePrismaClient();

    // Check if the user calling this API is an admin
    const admin = await prisma.users.findUnique({ where: { id: userId, role: users_role.ADMIN } });
    return admin ? true : false;
}

export async function verifyAdminSession(): Promise<number> {
    const session = await verifySession();
    if (!session) throw new AuthenticationError("Authentication is required");

    const userId = session?.userId;

    if (typeof userId !== 'number') throw new AuthenticationError();

    if (!(await isAdmin(userId))) throw new AuthorizationError("Admin access is required");

    return userId;
}