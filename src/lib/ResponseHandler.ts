import { ApiResponse, HandlerConfig } from "@/types";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JOSEError } from "jose/errors";
import { AuthenticationError, AuthorizationError, ConflictError } from "./custom-errors";
import { NextResponse } from "next/server";

export class ResponseHandler {
    private static config: HandlerConfig = {
        exposeErrors: process.env.NODE_ENV === "development"
    };

    static initialize(config: HandlerConfig) {
        this.config = config;
    }

    static success<T>(message: string, data: T): NextResponse<ApiResponse<T>> {
        return NextResponse.json({ success: true, message, data }, { status: 200});
    }

    static created<T>(message: string = "Created", data: T): NextResponse<ApiResponse<T>> {
        return NextResponse.json({ success: true, message: message, data }, { status: 201 });
    }

    // Common error shortcuts
    static badRequest(message = "Invalid request") {
        return this.errorResponse(400, message);
    }

    static unauthorized(message = "Unauthorized") {
        return this.errorResponse(401, message);
    }

    static forbidden(message = "Forbidden") {
        return this.errorResponse(403, message);
    }

    static notFound(message = "Resource not found") {
        return this.errorResponse(404, message);
    }

    static conflict(message = "Conflict occurred") {
        return this.errorResponse(409, message);
    }

    static internalError(error: unknown) {
        const { message } = this.parseError(error);
        return this.errorResponse(500, message);
    }

    private static errorResponse(
        statusCode: number,
        message: string,
    ): NextResponse<ApiResponse> {
        return NextResponse.json({
            success: false,
            message,
            data: null
        }, { status: statusCode });
    }

    private static parseError(error: any): {
        message: string;
        statusCode: number;
    } {
        if (error && typeof error === "object" && "code" in error) {
            // Check for Prisma error code
            if (error.code === 'P2002') {
                return {
                    message: "An entry with this value already exists",
                    statusCode: 409,
                };
            }
        }

        // Handle custom errors first
        if (error instanceof AuthenticationError) {
            return {
                message: error.message,
                statusCode: 401,
            };
        }
        if (error instanceof AuthorizationError) {
            return {
                message: error.message,
                statusCode: 403,
            };
        }
        if (error instanceof ConflictError) {
            return {
                message: error.message,
                statusCode: 409,
            };
        }

        // Handle Prisma errors
        if (error instanceof PrismaClientKnownRequestError) {
            return {
                message: this.sanitizePrismaError(error),
                statusCode: 500,
            };
        }

        // Handle JOSE errors
        if (error instanceof JOSEError) {
            return {
                message: this.mapJoseError(error),
                statusCode: 401,
            };
        }

        // Default case
        return {
            message: this.config.exposeErrors && error instanceof Error
                ? error.message
                : "Something went wrong",
            statusCode: 500
        };
    }

    public static handleError(error: any): NextResponse<ApiResponse> {
        const { statusCode, message } = this.parseError(error);
        return this.errorResponse(statusCode, message);
    }

    private static sanitizePrismaError(error: PrismaClientKnownRequestError): string {
        if (error.code === "P1001") { // Connection error
            return this.config.exposeErrors
                ? error.message
                : "Database connection unavailable";
        }

        return this.config.exposeErrors
            ? error.message
            : "Database operation failed";
    }

    private static mapJoseError(error: JOSEError): string {
        const errorMessages: Record<string, string> = {
            "ERR_JWT_EXPIRED": "Session expired",
            "ERR_JWS_INVALID": "Invalid token",
            "ERR_JWS_SIGNATURE_VERIFICATION_FAILED": "Invalid signature",
            "ERR_JWKS_TIMEOUT": "Security token service unavailable"
        };

        return errorMessages[error.code] || "Authentication error";
    }
}