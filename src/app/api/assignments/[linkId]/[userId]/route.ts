import { verifyAdminSession } from "@/lib/auth-helpers";
import { generatePrismaClient } from "@/lib/db";
import { ResponseHandler } from "@/lib/ResponseHandler";
import { NextRequest } from "next/server";

// Delete one assignment
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ linkId: number, userId: number }> }) {
    try {
        // Silence ESLint rules
        request.nextUrl;

        const { linkId, userId } = await params;

        await verifyAdminSession();

        const prisma = generatePrismaClient();

        const deletedAssignment = await prisma.link_assignments.delete({
            where: {
                userId_linkId: {
                    userId: Number(userId),
                    linkId: Number(linkId),
                },
            },
            include: {
                links: true,
                users: true,
            },
        });

        const { links, users } = deletedAssignment;

        return ResponseHandler.success(`Assignment of link '${links.name}' to user '${users.username}' was successfully revoked`, deletedAssignment);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }

}