import { users_role } from "@/generated/prisma";
import { sanitizeObject } from "@/lib/api-helpers";
import { verifyAdminSession } from "@/lib/auth-helpers";
import { generatePrismaClient } from "@/lib/db";
import { ResponseHandler } from "@/lib/ResponseHandler";
import { verifySession } from "@/lib/session";
import { isValidUrl } from "@/lib/utils";
import { NextRequest } from "next/server";

// Fetch all links
export async function GET() {
    try {
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

        let links;

        if (currentUser.role === users_role.ADMIN) {
            // Admin can access any link
            links = await prisma.links.findMany();
        } else {
            // Regular user must be assigned the link to fetch and see the link
            links = await prisma.links.findMany({
                where: {
                    link_assignments: {
                        some: {
                            userId,
                        }
                    }
                }
            });
        }
        if (!links) return ResponseHandler.internalError(new Error("Internal server error"));

        return ResponseHandler.success("Links found successfully", links);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}

// Create a link
export async function POST(request: NextRequest) {
    try {
        const userId = await verifyAdminSession();

        const prisma = generatePrismaClient();

        const { name, description, url, userIds } = sanitizeObject(await request.json());

        // Validate existance
        if (!userIds || !Array.isArray(userIds) || userIds.length === 0) 
            return ResponseHandler.badRequest("Must specify at least one user ID to assign the link");
        
        if (!name || typeof name !== "string") 
            return ResponseHandler.badRequest("Name is required");
        
        if (!url || typeof url !== "string") 
            return ResponseHandler.badRequest("URL is required");
        
        if (description && typeof description !== "string") 
            return ResponseHandler.badRequest("Description should be a string");

        // Validate format
        if (name.length < 3) 
            return ResponseHandler.badRequest("Name must be at least 3 characters long");
        
        if (!isValidUrl(url)) 
            return ResponseHandler.badRequest("Invalid URL");

        const result = await prisma.$transaction(async (tx) => {
            // Create the link
            const link = await tx.links.create({
                data: {
                    name,
                    url,
                    description: description ?? null,
                    creatorId: userId
                },
            });

            if (!link.id) throw new Error("Link creation failed");

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

            return link;
        });

        return ResponseHandler.success("Link created successfully", result);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}

// Delete one or more links at the same time
export async function DELETE() {

}