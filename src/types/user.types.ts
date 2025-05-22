import { links, users } from "@/generated/prisma";

export type PublicUser = Omit<users, "password" | "link_assignments"> & {
  links: links[]; // Array of assigned links
};