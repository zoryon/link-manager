import { Globe, Calendar } from "lucide-react";
import CustomTooltip from "../CustomTooltip";
import LinkCardDropdownMenu from "./LinkCardDropdownMenu";
import GenericCard from "../GenericCard";
import { formatTimeDistance } from "@/lib/utils";
import { links } from "@/generated/prisma";

const LinkCard = ({ link, onRevoke }: { link: links, onRevoke?: (linkId: number) => void }) => (
    <GenericCard 
        title={
            <CustomTooltip
                text={link.name}
                className="text-base xl:text-lg focus:outline-none text-foreground"
            />
        }
        dropdown={<LinkCardDropdownMenu link={link} onRevoke={onRevoke} />}
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