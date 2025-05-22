import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Calendar, Globe } from "lucide-react";
import { formatTimeDistance } from "@/lib/utils";
import { PublicUser } from "@/types";
import CustomTooltip from "../CustomTooltip";
import UserCardDropdownMenu from "./UserCardDropdownMenu";

const UserCard = ({ user }: { user: PublicUser }) => {
    return (
        <Card className="bg-card overflow-hidden hover:shadow-[0_4px_20px_oklch(0.19_0.03_245/0.5)] transition-shadow duration-200 px-0 py-4 border border-accent/90">
            <CardHeader className="-mb-3">
                <div className="flex justify-between items-start">
                    <CardTitle>
                        <CustomTooltip
                            text={user.username}
                            className="text-base xl:text-lg focus:outline-none text-foreground"
                        />
                    </CardTitle>
                    <UserCardDropdownMenu user={user} />
                </div>
                <CardDescription className="flex items-center gap-1 text-sm truncate mt-2">
                    <Globe size={12} className="text-chart-2" />
                    <p className="text-xs xl:text-sm focus:outline-none text-trivial">
                        {user.role!.charAt(0).toUpperCase() + user.role!.slice(1).toLowerCase()}
                    </p>
                </CardDescription>
            </CardHeader>
            <CardFooter className="pt-0 flex justify-between text-xs text-trivial">
                <div className="flex items-center">
                    <Calendar size={12} className="mr-1 text-chart-1" />
                    {formatTimeDistance(user.createdAt)}
                </div>
            </CardFooter>
        </Card>
    );
};

export default UserCard;
