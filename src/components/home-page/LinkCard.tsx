import { Globe, Calendar } from "lucide-react";
import CustomTooltip from "../CustomTooltip";
import LinkCardDropdownMenu from "./LinkCardDropdownMenu";
import GenericCard from "../GenericCard";
import { formatTimeDistance } from "@/lib/utils";
import { LinkWithTld } from "@/types";

const LinkCard = ({ link }: { link: LinkWithTld }) => (
    <GenericCard
        title={
            <CustomTooltip
                text={link.name}
                className="text-base xl:text-lg focus:outline-none text-foreground"
            />
        }
        dropdown={<LinkCardDropdownMenu link={link} />}
        description={
            <>
                <Globe size={12} className="text-chart-2" />
                <CustomTooltip
                    text={link.url}
                    className="text-xs xl:text-sm focus:outline-none text-trivial"
                />
            </>
        }
        footer={
            <div className="flex items-center">
                <Calendar size={12} className="mr-1 text-chart-1" />
                {formatTimeDistance(link.createdAt)}
            </div>
        }
    />
);

export default LinkCard;