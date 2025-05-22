import { ReactNode } from "react";

export type GenericCardProps = {
    title: ReactNode;
    dropdown: ReactNode;
    description: ReactNode;
    footer: ReactNode;
    cardClassName?: string;
    headerClassName?: string;
    footerClassName?: string;
};