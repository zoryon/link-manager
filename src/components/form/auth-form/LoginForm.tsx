"use client";

import { z } from "zod";
import { userSchema } from "@/schemas";
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

type Result = {
    success: boolean,
    message: string
} | null;

const LoginForm = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [result, setResult] = useState<Result>(null);
    const router = useRouter();

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof userSchema>) {
        setIsPending(true);
        const res: ApiResponse = await fetch(api.sessions.post.path, {
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

        router.push("/");
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

                {/* Result message */}
                {!isPending && result?.message && (
                    <p className={cn(
                        result.success ? "text-green-600" : "text-red-600",
                        "text-sm"
                    )}>
                        {result.message}
                    </p>
                )}

                <Button type="submit" disabled={isPending} className="w-[40%]">Sign In</Button>
            </form>
        </Form>
    );
}

export default LoginForm;