import { NextRequest } from "next/server";
import { generatePrismaClient } from "@/lib/db";
import { createSignedSessionToken, verifySession } from "@/lib/session";
import { ResponseHandler } from "@/lib/ResponseHandler";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { sanitizeObject } from "@/lib/api-helpers";

// Login
export async function POST(request: NextRequest) {
    try {
        if (await verifySession()) return ResponseHandler.unauthorized("Already logged-in");

        const prisma = generatePrismaClient();

        const { username, password } = sanitizeObject(await request.json());

        if (!username) return ResponseHandler.badRequest("Username is required");
        if (!password) return ResponseHandler.badRequest("Password is required");

        const user = await prisma.users.findUnique({ where: { username } });
        if (!user) return ResponseHandler.badRequest("User was not found");

        const isMatching = await bcrypt.compare(password, user.password);
        if (!isMatching) return ResponseHandler.unauthorized("Invalid password");

        const newSessionToken = await createSignedSessionToken(user.id);

        const expires = new Date();
        expires.setDate(expires.getDate() + 7);

        (await cookies()).set("session_token", newSessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            expires,
            path: "/",
        });
        return ResponseHandler.success("Logged-in successfully", user.username);
    } catch (error) {
        console.error(error);
        return ResponseHandler.handleError(error);
    }
}

// Logout
export async function DELETE() {
    if (!(await verifySession())) ResponseHandler.unauthorized("You are not logged-in");

    (await cookies()).delete("session_token");

    return ResponseHandler.success("Logged out successfully", true);
}