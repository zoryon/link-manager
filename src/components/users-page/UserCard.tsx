import { Globe, Calendar } from "lucide-react";
import CustomTooltip from "../CustomTooltip";
import UserCardDropdownMenu from "./UserCardDropdownMenu";
import GenericCard from "../GenericCard";
import { formatTimeDistance } from "@/lib/utils";
import { PublicUser } from "@/types";

const UserCard = ({ user }: { user: PublicUser }) => (
    <GenericCard
        title={
            <CustomTooltip
                text={user.username}
                className="text-base xl:text-lg focus:outline-none text-foreground"
            />
        }
        dropdown={<UserCardDropdownMenu user={user} />}
        description={
            <>
                <Globe size={12} className="text-chart-2" />
                <p className="text-xs xl:text-sm focus:outline-none text-trivial">
                    {user.role!.charAt(0).toUpperCase() + user.role!.slice(1).toLowerCase()}
                </p>
            </>
        }
        footer={
            <div className="flex items-center">
                <Calendar size={12} className="mr-1 text-chart-1" />
                {formatTimeDistance(user.createdAt)}
            </div>
        }
    />
);

export default UserCard;