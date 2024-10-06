import { cn } from "@/lib/utils";
import { CalendarDays, Droplet, ThermometerSnowflake } from "lucide-react";

type TForecastStatus = "normal" | "warning" | "danger";

const StatusTagsComponent = (status: TForecastStatus) => {
  const defaultClass = "rounded-xl px-2 py-1 justify-center items-center flex w-fit flex-1";

  const tags = {
    normal: (
      <span className={cn(defaultClass, "bg-green50 text-green600")}>
        Normal
      </span>
    ),
    warning: (
      <span className={cn(defaultClass, "bg-yellow50 text-yellow600")}>
        Warning
      </span>
    ),
    danger: (
      <span className={cn(defaultClass, "bg-red50 text-red600")}>Danger</span>
    ),
  };

  return tags[status];
};

export function PredictionTable() {
  return (
    <div className="w-full rounded-md overflow-hidden border border-white200">
      <div className="w-full h-14 bg-slate-50 text-slate-400 flex items-center gap-2 px-3">
        <CalendarDays size={18} className="text-slate-400" /> 5 day forecast
      </div>
      
      <div className="w-full h-14 bg-white flex items-center px-3 gap-3 min-[390px]:gap-5">
        <span className="flex-1 flex">Hoje</span>
        {StatusTagsComponent("normal")}

        <span className="px-2 py-1 flex gap-1 items-center text-green800 bg-white100 rounded-xl flex-1 justify-center">
          <ThermometerSnowflake size={16} />
          10º <span className="text-slate-400">|</span> 20º
        </span>

        <span className="bg-blue-50 rounded-xl px-2 py-1 flex gap-1 items-center text-blue-400 flex-1 justify-center">
            <Droplet size={16} className="text-blue-400" /> 30º
        </span>
      </div>
    </div>
  );
}
