import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md before:animate-[wave_2s_infinite]", className)}
      {...props}
    />
  )
}

export { Skeleton }
