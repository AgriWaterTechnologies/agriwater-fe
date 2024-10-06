import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

type GradientCardProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
}

export function GradientCard({
    children,
    className,
    ...rest
}: GradientCardProps) {
    return (
        <div className={cn("w-full flex rounded-md bg-gradient-to-r from-[#018062] to-[#01513E] p-3", className)} {...rest}>
            {children}
        </div>
    )
}