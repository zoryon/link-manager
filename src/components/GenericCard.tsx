import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { GenericCardProps } from "@/types";

const GenericCard = ({
    title,
    dropdown,
    description,
    footer,
    cardClassName = "bg-card overflow-hidden hover:shadow-[0_4px_20px_oklch(0.19_0.03_245/0.5)] transition-shadow duration-200 px-0 py-4 border border-accent/90",
    headerClassName = "-mb-3",
    footerClassName = "pt-0 flex justify-between text-xs text-trivial",
}: GenericCardProps) => {
    return (
        <Card className={cardClassName}>
            <CardHeader className={headerClassName}>
                <div className="flex justify-between items-start">
                    <CardTitle>{title}</CardTitle>
                    {dropdown}
                </div>
                <CardDescription className="flex items-center gap-1 text-sm truncate mt-2">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter className={footerClassName}>
                {footer}
            </CardFooter>
        </Card>
    );
};

export default GenericCard;