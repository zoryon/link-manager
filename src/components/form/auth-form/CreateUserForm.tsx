"use client"

import { z } from "zod";
import { createUserSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import PasswordInput from "@/components/inputs/password-input/PasswordInput";
import { ApiResponse } from "@/types";
import { api } from "@/lib/endpoint-builder";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { users_role } from "@/generated/prisma";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Result = {
    success: boolean,
    message: string
} | null;

const CreateUserForm = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [result, setResult] = useState<Result>(null);
    const router = useRouter();

    const form = useForm<z.infer<typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            username: "",
            password: "",
            passwordConfirmation: "",
            role: users_role.USER
        },
    });

    async function onSubmit(values: z.infer<typeof createUserSchema>) {
        setIsPending(true);
        const res: ApiResponse = await fetch(api.users.post.path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        }).then(res => res.json());
        
        setResult({
            success: res.success,
            message: res.message
        });
        setIsPending(false);

        if (res.success) {
            router.push("/users");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[80%] md:w-[60%] lg:w-[40%] 2xl:w-[20%] space-y-5">
                {/* Username */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="your username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password */}
                <PasswordInput 
                    control={form.control} 
                    fieldLabel="Password" 
                />

                {/* Password confirmation */}
                <PasswordInput 
                    control={form.control} 
                    fieldLabel="Password" 
                    isConfirmation
                />

                {/* Role */}
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={users_role.USER}>User</SelectItem>
                                        <SelectItem value={users_role.ADMIN}>Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Result message */}
                {!isPending && result?.message && (
                    <p className={cn(
                        result.success ? "text-green-600" : "text-red-600",
                        "text-sm"
                    )}>
                        {result.message}
                    </p>
                )}

                <Button type="submit" disabled={isPending} className="w-[40%]">Create</Button>
            </form>
        </Form>
    );
}

export default CreateUserForm;