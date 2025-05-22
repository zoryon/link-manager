import { PublicUser } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserDetailsCard = ({ user }: { user: PublicUser }) => (
    <Card className="mb-6">
        <CardHeader>
            <CardTitle className="text-xl">User Details</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                <p className="font-medium">
                    Username:{" "}
                    <span className="text-primary font-extrabold">{user.username}</span>
                </p>
                <p className="text-sm text-gray-600">
                    Role: <span className="capitalize">{user.role!.toLowerCase()}</span>
                </p>
                <p className="text-sm text-gray-600">
                    Member since: {new Date(user.createdAt!).toLocaleDateString()}
                </p>
            </div>
        </CardContent>
    </Card>
);

export default UserDetailsCard;