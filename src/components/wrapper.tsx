import { HTMLAttributes } from "react";

type WrapperProps = HTMLAttributes<HTMLDivElement>;

export default function Wrapper({ children, className }: WrapperProps) {
  return <div className={`w-full h-screen ${className}`}>{children}</div>;
}
