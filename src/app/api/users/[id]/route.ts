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
        const user = await prisma.users.findUnique({
            where: { 
                id: Number(id), 
            },
            include: {
                link_assignments: {
                    include: {
                        links: true
                    }
                }
            }
        });
        if (!user) return ResponseHandler.notFound("User was not found");

        // Remove password and link_assignments from the returned data
        const { password, link_assignments, ...userData } = user;

        // Extract assigned links from link_assignments
        const assignedLinks = link_assignments.map(assignment => assignment.links);

        return ResponseHandler.success("User found successfully", { ...userData, links: assignedLinks });
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}

// Delete one link
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    try {
        // Silence ESLint rules
        request.nextUrl;

        const { id } = await params;

        await verifyAdminSession();

        const prisma = generatePrismaClient();

        const deletedUser = await prisma.users.delete({
            where: {
                id: Number(id),
            },
        });

        return ResponseHandler.success(`User with username '${deletedUser.username}' was successfully deleted`, deletedUser);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }

}