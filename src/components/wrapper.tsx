import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type WrapperProps = HTMLAttributes<HTMLDivElement>;

export default function Wrapper({ children, className }: WrapperProps) {
  return <div className={cn(`w-full h-screen pt-24 mb-24`, className)}>{children}</div>;
}
