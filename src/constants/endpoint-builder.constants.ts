export const API_CONFIG = {
    me: {
        get: { path: "/me", method: "GET" as const }
    },
    users: {
        get: { path: "/users", method: "GET" as const },
        post: { path: "/users", method: "POST" as const },
        byId: (id: string) => ({
            get: { path: `/users/${id}`, method: "GET" as const },
        })
    },
    sessions: {
        post: { path: "/sessions", method: "POST" as const },
        delete: { path: "/sessions", method: "DELETE" as const },
    },
    links : {
        get: { path: "/links", method: "GET" as const },
        post: { path: "/links", method: "POST" as const },
        byId: (id: string) => ({
            get: { path: `/links/${id}`, method: "GET" as const },
        })
    }
} as const;

export const API_BASE = "/api";