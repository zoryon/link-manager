"use client";

import { ComponentType } from "react";

type Props<T> = {
    data: T[];
    gridClass?: string;
    gapClass?: string;
    keyProp?: keyof T;
    component: ComponentType<{ data: T }>;
    emptyMessage?: string;
};

const Grid = <T extends object>({
    data,
    gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    gapClass = "gap-2 xl:gap-3",
    keyProp = "id" as keyof T,
    component: Component,
    emptyMessage = "No items found"
}: Props<T>) => {
    if (data.length === 0) {
        return (
            <div className="text-center text-gray-500 p-8">
                {emptyMessage}
            </div>
        );
    }

    return (
        <div className={`${gridClass} ${gapClass}`}>
            {data.map((item) => (
                <Component key={String(item[keyProp])} data={item} />
            ))}
        </div>
    );
};

export default Grid;