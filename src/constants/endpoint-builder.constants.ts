export const API_CONFIG = {
    me: {
        get: { path: "/me", method: "GET" as const }
    },
    users: {
        get: { path: "/users", method: "GET" as const },
        post: { path: "/users", method: "POST" as const },
        byId: (id: number) => ({
            get: { path: `/users/${id}`, method: "GET" as const },
            delete: { path: `/users/${id}`, method: "DELETE" as const },
        })
    },
    sessions: {
        post: { path: "/sessions", method: "POST" as const },
        delete: { path: "/sessions", method: "DELETE" as const },
    },
    links: {
        get: { path: "/links", method: "GET" as const },
        post: { path: "/links", method: "POST" as const },
        delete: { path: "links", method: "DELETE" as const },
        byId: (id: number) => ({
            get: { path: `/links/${id}`, method: "GET" as const },
            delete: { path: `/links/${id}`, method: "DELETE" as const },
        })
    },
    assignments: {
        post: { path: "/assignments", method: "POST" as const },
        byIds: ({ linkId, userId }: { linkId: number, userId: number }) => ({
            delete: { path: `/assignments/${linkId}/${userId}`, method: "DELETE" as const },
        })
    }
} as const;

export const API_BASE = "/api";