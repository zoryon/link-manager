"use client";

import CreateLinkForm from "@/components/form/link-form/CreateLinkForm";

const CreatePage = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Create New Link</h1>
                <p className="text-muted-foreground">
                    Create and manage shortened links with advanced tracking
                </p>
            </div>

            <CreateLinkForm />
        </div>
    );
};

export default CreatePage;