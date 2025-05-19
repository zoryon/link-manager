import { generatePrismaClient } from "@/lib/db";
import { ResponseHandler } from "@/lib/ResponseHandler";
import { verifySession } from "@/lib/session";

// Find current user data
export async function GET() {
    try {
        const session = await verifySession();
        const userId: number = session?.userId as number;
        if (!userId) return ResponseHandler.unauthorized("Authentication is required");
        
        const prisma = generatePrismaClient();

        // Find requested user data
        const user = await prisma.users.findUnique({ where: { id: userId } });
        if (!user) return ResponseHandler.notFound("User was not found");

        // Remove password from the returned data
        const { password, ...userData } = user;

        return ResponseHandler.success("User found successfully", userData);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}