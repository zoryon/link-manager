export type LinkWithTld = {
    tld: string;
    name: string;
    id: number;
    creatorId: number;
    description: string | null;
    url: string;
    createdAt: Date | null;
    updatedAt: Date | null;
};