export class AuthenticationError extends Error {
    constructor(message: string = "Authentication required") {
        super(message);
        this.name = "AuthenticationError";
    }
}

export class AuthorizationError extends Error {
    constructor(message: string = "Insufficient permissions") {
        super(message);
        this.name = "AuthorizationError";
    }
}

export class ConflictError extends Error {
    constructor(message: string = "Resource conflict") {
        super(message);
        this.name = "ConflictError";
    }
}

export class PrismaError extends Error {
    code: string;

    constructor(message: string, code: string) {
        super(message);
        this.name = "PrismaError";
        this.code = code;
    }
}