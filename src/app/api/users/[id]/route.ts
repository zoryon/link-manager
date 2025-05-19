import { verifyAdminSession } from "@/lib/auth-helpers";
import { generatePrismaClient } from "@/lib/db";
import { ResponseHandler } from "@/lib/ResponseHandler";
import { NextRequest } from "next/server";

// Find requested user data
export async function GET(request: NextRequest, { params } : { params: Promise<{ id: number }>}) {
    try {
        // Silence ESLint rules
        request.nextUrl;

        const { id } = await params;

        await verifyAdminSession();
        
        const prisma = generatePrismaClient();

        // Find requested user data
        const user = await prisma.users.findUnique({ where: { id } });
        if (!user) return ResponseHandler.notFound("User was not found");

        // Remove password from the returned data
        const { password, ...userData } = user;

        return ResponseHandler.success("User found successfully", userData);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}