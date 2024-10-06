import { Droplet, CircleAlert } from "lucide-react";
import { GradientCard } from "./gradient-card";

type RegionCardProps = {
  name: string;
  max: number;
  min: number;
  current: number;
  precipitation: {
    probability: number;
  };
  risk: string;
};

export function RegionCard({
  name,
  max,
  min,
  current,
  risk,
  precipitation,
}: RegionCardProps) {
  return (
    <GradientCard className="justify-between">
      <div className="flex flex-col">
        <p className="text-white font-semibold mb-3">{name}</p>
        <div className="flex gap-1 flex-col">
          <div className="flex text-white items-center">
            <Droplet size={16} className="text-white" />
            {precipitation.probability}%
          </div>
          <div className="flex gap-1 text-white items-center">
            <CircleAlert size={16} className="text-white" />
            {risk}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <p className="text-white font-normal text-4xl">{current}º</p>
        <p className="text-white font-normal">
            {`Min.: ${min}º - Max.: ${max}º`}
        </p>
      </div>
    </GradientCard>
  );
}
