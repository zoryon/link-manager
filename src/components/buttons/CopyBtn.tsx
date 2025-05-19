import { Button } from "@/components/ui/button";
import { Size } from "@/types";
import { useState } from "react";

const CopyBtn = ({
    size = "default",
    className = "",
    url,
}: {
    size: Size,
    className: string,
    url: string,
}) => {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Button
            size={size}
            className={className}
            onClick={() => handleCopy()}
        >
            <i className="fa-regular fa-copy text-base mr-2" />
            {copied ? "Copied!" : "Copy"}
        </Button>
    );
}

export default CopyBtn;