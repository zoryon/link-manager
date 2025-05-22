import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Calendar, Globe } from "lucide-react";
import { formatTimeDistance } from "@/lib/utils";
import { LinkWithTld } from "@/types";
import CustomTooltip from "../CustomTooltip";
import CardDropdownMenu from "@/components/home-components/CardDropdownMenu";

const LinkCard = ({ link }: { link: LinkWithTld }) => {
    return (
        <Card className="bg-card overflow-hidden hover:shadow-[0_4px_20px_oklch(0.19_0.03_245/0.5)] transition-shadow duration-200 px-0 py-4 border border-accent/90">
            <CardHeader className="-mb-3">
                <div className="flex justify-between items-start">
                    <CardTitle>
                        <CustomTooltip
                            text={link.name}
                            className="text-base xl:text-lg focus:outline-none text-foreground"
                        />
                    </CardTitle>
                    <CardDropdownMenu link={link} />
                </div>
                <CardDescription className="flex items-center gap-1 text-sm truncate mt-2">
                    <Globe size={12} className="text-chart-2" />
                    <CustomTooltip
                        text={link.url}
                        className="text-xs xl:text-sm focus:outline-none text-trivial"
                    />
                </CardDescription>
            </CardHeader>
            <CardFooter className="pt-0 flex justify-between text-xs text-trivial">
                <div className="flex items-center">
                    <Calendar size={12} className="mr-1 text-chart-1" />
                    {formatTimeDistance(link.createdAt)}
                </div>
            </CardFooter>
        </Card>
    );
};

export default LinkCard;
