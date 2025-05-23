import { users_role } from "@/generated/prisma";

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

export type UserAssigned = {
  id: number;
  username: string;
  role: users_role;
  createdAt: Date | null;
};

export type LinkWithAssignedUsers = {
  id: number;
  name: string;
  creatorId: number;
  description: string | null;
  url: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  assignedUsers: UserAssigned[];
};
