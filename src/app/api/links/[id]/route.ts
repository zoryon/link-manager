import { links, users_role } from "@/generated/prisma";
import { verifyAdminSession } from "@/lib/auth-helpers";
import { generatePrismaClient } from "@/lib/db";
import { ResponseHandler } from "@/lib/ResponseHandler";
import { verifySession } from "@/lib/session";
import { NextRequest } from "next/server";

// Find requested link data
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    try {
        // Silence ESLint rules
        request.nextUrl;

        const { id: strId } = await params;
        const id: number = Number(strId);

        const session = await verifySession();
        const userId: number = session?.userId as number;
        if (!userId) return ResponseHandler.unauthorized("Authorization is required");

        const prisma = generatePrismaClient();

        // Get current user's role
        const currentUser = await prisma.users.findUnique({
            where: { id: userId },
            select: { role: true }
        });
        if (!currentUser) return ResponseHandler.notFound("User not found");

        let link;

        if (currentUser.role === users_role.ADMIN) {
            // Admin can access any link
            link = await prisma.links.findUnique({
                where: { 
                    id,
                },
                include: {
                    link_assignments: {
                        include: {
                            users: {
                                select: {
                                    id: true,
                                    username: true,
                                    role: true,
                                    createdAt: true,
                                },
                            },
                        },
                    },
                },
            });

            if (!link) return ResponseHandler.notFound("Link not found");

            const assignedUsers = link.link_assignments.map(a => a.users);

            return ResponseHandler.success("Link found successfully", {
                id: link.id,
                name: link.name,
                url: link.url,
                description: link.description,
                createdAt: link.createdAt,
                updatedAt: link.updatedAt,
                creatorId: link.creatorId,
                assignedUsers,
            });
        } else {
            // Regular user must be assigned the link to fetch and see it
            link = await prisma.links.findUnique({
                where: {
                    id,
                    link_assignments: {
                        some: {
                            userId,
                        }
                    }
                }
            });

            if (!link) return ResponseHandler.notFound("Link not found");

            return ResponseHandler.success("Link found successfully", link as links);
        }
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

        const deletedLink = await prisma.links.delete({
            where: {
                id: Number(id),
            },
        });

        return ResponseHandler.success(`Link with name '${deletedLink.name}' was successfully deleted`, deletedLink);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }

}