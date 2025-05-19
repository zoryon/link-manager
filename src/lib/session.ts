"use server";

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { JWSSignatureVerificationFailed, JWTExpired, JWTInvalid } from "jose/errors";
import { cookies } from "next/headers";

// Key for signing and verifying JWT tokens (session tokens)
const key = new TextEncoder().encode(process.env.SESSION_KEY!);

/**
 * Function to create a signed session token for a user.
 * - Uses a user ID to create a JWT payload.
 * - Sets the expiration time of the token (default is 7 days if not provided).
 * - Signs the token with the key for security.
 * 
 * @param userId - The user ID to include in the JWT payload.
 * @param expr - Optional expiration time for the token (default is "7d").
 * @returns A promise that resolves to the signed JWT token.
 */
export async function createSignedSessionToken(userId: number, expr?: string): Promise<string> {
    const alg = "HS256";
    return await new SignJWT({ userId }) // Set user ID as part of the payload
        .setProtectedHeader({ alg }) // Set the algorithm in the JWT header
        .setIssuedAt() // Set the issued at timestamp (iat)
        .setExpirationTime(expr ? expr : "7d")
        .sign(key); // Sign the token using the key
}

/**
 * Function to validate the session token.
 * - Verifies if the provided token is valid using the key.
 * - If valid, returns the decoded JWT payload.
 * 
 * @throws Error (No active session was found) if no sessionToken is found.
 * @returns The decoded JWT payload if the token is valid, otherwise null.
 */
export async function verifySession(): Promise<JWTPayload | null> {
    const sessionToken = (await cookies()).get("session_token")?.value;
    if (!sessionToken) return null;

    try {
        // Verify the token using the key and extract the payload
        const { payload }: { payload: JWTPayload } = await jwtVerify(sessionToken, key);
        return payload; // Return the decoded payload (e.g., user ID, issue date, expiration date)
    } catch (error) {
        if (error instanceof JWTExpired) {
            console.error("Token expired");
        } else if (error instanceof JWSSignatureVerificationFailed) {
            console.error("Invalid signature");
        } else if (error instanceof JWTInvalid) {
            console.error("Malformed JWT");
        } else {
            console.error("Verification failed", error);
        }
        return null;
    }
}
