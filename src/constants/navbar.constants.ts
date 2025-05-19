import { NavbarItem } from "@/types";

export const NAVBAR_ITEMS: NavbarItem[] = [
    { 
        name: "Home", 
        href: "/", 
        icon: "fa-solid fa-house", 
    },
    { 
        name: "Users", 
        href: "/users", 
        icon: "fa-solid fa-users", 
        isAdminOnly: true, 
    },
    { 
        name: "Profile", 
        href: "/profile", 
        icon: "fa-solid fa-user", 
    },
    { 
        name: "Settings", 
        href: "/settings", 
        icon: "fa-solid fa-gear", 
    },
] as const;