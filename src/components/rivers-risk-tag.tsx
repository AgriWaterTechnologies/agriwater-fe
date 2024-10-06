import { cn } from "@/lib/utils";
import { CircleAlert, TriangleAlert } from "lucide-react";

type RiversRisksTagsProps = {
  type: "warnin" | "danger";
  name: string;
};

export function RiverRiskTag({ type, name }: RiversRisksTagsProps) {

  return (
    <div className={
      cn(
        "flex items-center justify-center gap-2 rounded-md h-8 overflow-hiddens pr-3",
        type === "warnin" ? "bg-yellow-100" : "bg-red-100"
      )
    }>
      <div
        className={cn(
          "flex items-center justify-center h-full w-8 rounded-md aspect-square",
          type === "warnin" ? "bg-yellow-400" : "bg-red-400"
        )}
      >
        {
          type === "warnin" ? (
            <CircleAlert size={22} className="text-white" />
          ) : (
            <TriangleAlert size={22} className="text-white" />
          )
        }
      </div>

      <span
        className={cn(
          "text-sm font-medium",
          type === "warnin" ? "text-yellow-500" : "text-red-500"
        )}
      >
        {name}
      </span>
    </div>
  );
}
