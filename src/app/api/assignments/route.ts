import { sanitizeObject } from "@/lib/api-helpers";
import { verifyAdminSession } from "@/lib/auth-helpers";
import { generatePrismaClient } from "@/lib/db";
import { ResponseHandler } from "@/lib/ResponseHandler";
import { NextRequest } from "next/server";

// Assign a link to a single user
export async function POST(request: NextRequest) {
    try {
        await verifyAdminSession();

        const prisma = generatePrismaClient();

        const { linkId, userIds } = sanitizeObject(await request.json());

        // Validate existance
        if (!userIds || !Array.isArray(userIds) || userIds.length === 0) 
            return ResponseHandler.badRequest("Must specify at least one user ID to assign the link");
        
        if (!linkId) 
            return ResponseHandler.badRequest("A link ID is required");
        
        const result = await prisma.$transaction(async (tx) => {
            // Find the link
            const link = await tx.links.findUnique({
                where: {
                    id: linkId,
                },
            });

            if (!link || !link.id) throw new Error("Link not found");

            // Create multiple assignments
            const assignments = await tx.link_assignments.createMany({
                data: userIds.map(userId => ({
                    linkId: link.id,
                    userId
                })),
                skipDuplicates: true 
            });

            if (assignments.count === 0) 
                throw new Error("Failed to create any assignments");

            return {
                linkId: link.id,
                assignedUsers: assignments.count
            };
        });

        return ResponseHandler.success("Link assigned successfully", result);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}