"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { users } from "@/generated/prisma";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { linkSchema } from "@/schemas";
import { api } from "@/lib/endpoint-builder";
import { ApiResponse } from "@/types";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLinks } from "@/hooks/use-links";

const CreateLinkForm = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [usersList, setUsersList] = useState<Array<users>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [result, setResult] = useState<string | null>(null);

    const router = useRouter();
    const { setLinks } = useLinks();

    useEffect(() => {
        const fetchUsers = async () => {
            const res: ApiResponse = await fetch(api.users.get.path, {
                method: "GET"
            }).then(res => res.json());
            if (res.success) {
                setUsersList(res.data);
            } else {
                console.error(res.message)
                setResult(res.message);
            }
        };
        fetchUsers();
    }, []);

    const form = useForm({
        resolver: zodResolver(linkSchema),
        defaultValues: {
            name: "",
            url: "",
            description: "",
            userIds: [],
        },
    });

    async function onSubmit(data: z.infer<typeof linkSchema>) {
        setResult("");
        setIsPending(true);

        // Create a temporary ID (negative or UUID)
        const tempId = Date.now() * -1;
        const creatorId = Date.now() * -2;

        // Build a provisional link object with the data filled and temp ID
        const optimisticLink = {
            id: tempId,
            name: data.name,
            url: data.url,
            description: data.description,
            createdAt: new Date(),
            updatedAt: new Date(),
            creatorId: creatorId
        };

        // Optimistically update the links state immediately
        setLinks(prev => [...prev, optimisticLink]);

        try {
            const res: ApiResponse = await fetch(api.links.post.path, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }).then(res => res.json());

            if (res.success) {
                // Replace the optimistic link with the real one from response (if returned)
                setLinks(prev => prev.map(link => 
                    link.id === tempId ? res.data : link
                ));
                router.push("/");
            } else {
                // On failure, remove the optimistic link and show error
                setLinks(prev => prev.filter(link => link.id !== tempId));
                setResult(res.message);
                console.error(res.message);
            }
        } catch (error) {
            // On error, remove optimistic link and show generic error
            setLinks(prev => prev.filter(link => link.id !== tempId));
            setResult("Unexpected error occurred");
            console.error(error);
        } finally {
            setIsPending(false);
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name, URL, Description Fields remain unchanged */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Link Name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="My Awesome Link"
                                    className="focus-visible:ring-2 focus-visible:ring-primary/50 border-accent/50"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Destination URL</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="https://example.com"
                                    type="url"
                                    className="focus-visible:ring-2 focus-visible:ring-primary/50 border-accent/50"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="Describe your link..."
                                    className="resize-none focus-visible:ring-2 focus-visible:ring-primary/50 border-accent/50"
                                    rows={4}
                                    maxLength={500}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* User Selection Fixed */}
                <FormField
                    control={form.control}
                    name="userIds"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <FormLabel>Assign to Users</FormLabel>
                            <FormControl>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <div className="relative">
                                            <div className="flex flex-wrap gap-2 rounded-md border p-2 min-h-[40px] cursor-pointer border-accent/50 transition-colors">
                                                {field.value.length === 0 && (
                                                    <span className="text-muted-foreground ml-2">
                                                        Select users...
                                                    </span>
                                                )}
                                                {field.value.map((userId) => {
                                                    const user = usersList.find((u) => u.id === userId);
                                                    return (
                                                        <Badge
                                                            key={userId}
                                                            variant="secondary"
                                                            className="flex items-center gap-1 pr-1 "
                                                        >
                                                            {user?.username}
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    field.onChange(
                                                                        field.value.filter((id) => id !== userId)
                                                                    );
                                                                }}
                                                                className="ml-1 rounded-full outline-none hover:bg-accent/50 size-4 flex items-center justify-center"
                                                            >
                                                                <i className="fa-solid fa-xmark w-3 h-3" />
                                                            </button>
                                                        </Badge>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0 w-[var(--radix-popover-trigger-width)] bg-ring/40">
                                        <Command>
                                            <CommandInput placeholder="Search users..." />
                                            <CommandList>
                                                <CommandEmpty>No users found.</CommandEmpty>
                                                <CommandGroup>
                                                    {usersList.map((user) => (
                                                        <CommandItem
                                                            key={user.id}
                                                            value={String(user.id)}
                                                            onSelect={() => {
                                                                const newValue = field.value.includes(user.id)
                                                                    ? field.value.filter((id) => id !== user.id)
                                                                    : [...field.value, user.id];
                                                                field.onChange(newValue);
                                                            }}
                                                            className="cursor-pointer"
                                                        >
                                                            <div className="mr-2 flex items-center">
                                                                <i className={cn(
                                                                    "fa-solid fa-check w-4 h-4",
                                                                    field.value.includes(user.id)
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )} />
                                                            </div>
                                                            {user.username}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Result message */}
                {!isPending && result && (
                    <p className="text-sm text-red-600">{result}</p>
                )}

                <div className="flex justify-end gap-4">
                    <Button
                        type="submit"
                        className="px-8 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                        disabled={isPending}
                    >
                        Create Link
                    </Button>
                </div>
            </form>
        </Form>
    );
}

export default CreateLinkForm;