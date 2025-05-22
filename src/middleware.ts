import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from "./lib/session";
import { api } from "./lib/endpoint-builder";
import { Route } from "./types";

/**
 * Middleware function to handle authentication and authorization
 * for both API routes and frontend pages.
 */
export async function middleware(req: NextRequest) {
    const isAuthenticated = await verifySession();
    
    // Extract the current request path
    const { pathname } = req.nextUrl;
    
    /**
     * ---------------------------
     * API Routes Access Handling
     * ---------------------------
    */
    if (pathname.startsWith("/api")) {
        // API routes accessible only to unauthenticated users
        const unauthenticatedOnlyApi: Array<Route> = [
           { path: api.sessions.post.path, method: api.sessions.post.method }
        ];

        // API routes always accessible to everyone
        const alwaysPublicApi: Array<string> = [];
        
        // Check if the current API route is for unauthenticated users only
        const isUnauthenticatedApi = unauthenticatedOnlyApi.some(route => 
            pathname.startsWith(route.path) && req.method === route.method
        );
        
        // Prevent authenticated users from accessing unauthenticated-only API routes
        if (isUnauthenticatedApi) {
            return isAuthenticated 
            ? NextResponse.json({ error: "Already authenticated" }, { status: 403 })
            : NextResponse.next();
        }

        // Allow access to always public API routes
        const isPublicApi = alwaysPublicApi.some(route => 
            pathname.startsWith(route)
        );

        if (isPublicApi) return NextResponse.next();

        // For private API routes, block unauthenticated users
        if (!isAuthenticated) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        // Allow authenticated users to access private API routes
        return NextResponse.next();
    }

    /**
     * -------------------------------
     * Frontend Pages Access Handling
     * -------------------------------
     */

    // Pages always publicly accessible
    const alwaysPublicPages: Array<string> = [];

    // Pages intended only for unauthenticated users
    const unauthenticatedOnlyPages = [
        "/login",
    ];

    // Allow access to always public pages
    if (alwaysPublicPages.includes(pathname)) {
        return NextResponse.next();
    }

    // Redirect authenticated users away from unauthenticated-only pages
    if (unauthenticatedOnlyPages.includes(pathname)) {
        return isAuthenticated 
            ? NextResponse.redirect(new URL("/", req.url)) // Redirect to homepage if authenticated
            : NextResponse.next(); // Allow access if unauthenticated
    }

    // Redirect unauthenticated users trying to access private pages to the login page
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Default: allow access if authenticated
    return NextResponse.next();
}

/**
 * Configuration for the middleware matcher
 * Excludes static assets and image files from middleware processing
 */
export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};