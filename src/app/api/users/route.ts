import { verifyAdminSession } from "@/lib/auth-helpers";
import { generatePrismaClient } from "@/lib/db";
import { ResponseHandler } from "@/lib/ResponseHandler";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";

// Fetch all users
export async function GET() {
    try {
        await verifyAdminSession();

        const prisma = generatePrismaClient();

        // Find all users
        const users = await prisma.users.findMany();
        if (users === null) return ResponseHandler.internalError(new Error("Internal server error"));

        return ResponseHandler.success("User was created successfully", users);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}

// Register an user
export async function POST(request: NextRequest) {
    try {
        await verifyAdminSession();

        const prisma = generatePrismaClient();

        const { username, password } = await request.json();

        const hashedPassword = await bcrypt.hash(password, 10);;

        // Register the new user
        const createdUser = await prisma.users.create({
            data: {
                username,
                password: hashedPassword,
            }
        });
        if (!createdUser) return ResponseHandler.internalError(new Error("Internal server error"));

        return ResponseHandler.created("User created successfully", createdUser);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}