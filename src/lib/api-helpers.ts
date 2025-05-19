export function sanitizeObject(input: any): any {
    if (typeof input !== 'object' || input === null) {
        return typeof input === 'string' ? input.trim() : input
    }

    if (Array.isArray(input)) {
        return input.map((item: any) => sanitizeObject(item))
    }

    const cloned = { ...input }

    for (const key in cloned) {
        const value = cloned[key]

        if (typeof value === 'string') {
            cloned[key] = value.trim()
        } else if (typeof value === 'object' && value !== null) {
            cloned[key] = sanitizeObject(value)
        }
    }

    return cloned;
}