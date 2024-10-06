import { useQuery } from "@tanstack/react-query";
import { Droplet, Sprout, Sunrise, Sunset, Waves, Wind } from "lucide-react";
import { Geojson } from "./geojson";
import { DrawerHeader } from "./ui/drawer";
import { Header } from "./header";
import { PredictionTable } from "./prediction-table";
import { RiverRiskTag } from "./rivers-risk-tag";
import Wrapper from "./wrapper";
import { IRegion } from "@/app/query-provider/farmers";

export function RegionDetail({
  region
}: {
  region: IRegion
}) {

  const { isLoading } = useQuery({
    queryKey: ["region",],
    queryFn: async () => {
      return {
        id: region.id,
        name: region.name,
        idealCultivation: ["Tomato", "Potato", "Carrot"],
        centralPoint: {
          lat: region.centralPoint.lat,
          lon: region.centralPoint.lon,
        },
      };
    },
  });

  return (
    <Wrapper>
      {isLoading && <RegionDetailSkeleton />}

      {region && !isLoading && (
        <div className="flex flex-col items-center m-auto">
          <div className="flex flex-col max-w-4xl w-full">
            <Header title={region.name} />

            <div className="p-4 flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <div className="flex items-center text-green700 gap-2">
                  <Sprout size={20} className="text-green700" />
                  <span className="font-medium text-lg">Ideal cultivation</span>
                </div>

                <div className="flex gap-2 items-center mt-2">
                  {["Tomato", "Potato", "Carrot"].map((cultivation) => (
                    <div
                      key={cultivation}
                      className="text-gray-600 text-sm py-1 px-2 rounded bg-white200"
                    >
                      {cultivation}
                    </div>
                  ))}
                </div>
              </div>

              {/* list geojson's */}
              <div className="flex flex-col gap-4">
                <Geojson coordinates={region.centralPoint} type="temperature" />
                <Geojson coordinates={region.centralPoint} type="precipitation" />
              </div>

              <div className="flex gap-4 flex-wrap items-center">
                <div className="flex items-center text-green700 gap-2 border border-green700 rounded-md p-2 w-fit">
                  <Wind size={20} className="text-green700" />
                  <span className="font-medium text-lg">104 km/h</span>
                </div>

                <div className="flex items-center text-green700 gap-2 border border-green700 rounded-md p-2 w-fit">
                  <span className="flex gap-1 items-center">
                    <Sunrise size={20} className="text-green700" />
                    <span className="font-medium text-lg">05:10h</span>
                  </span>

                  <span className="flex gap-1 items-center">
                    <Sunset size={20} className="text-green700" />
                    <span className="font-medium text-lg">17:10h</span>
                  </span>
                </div>

                <div className="flex items-center text-green700 gap-2 border border-green700 rounded-md p-2 w-fit">
                  <Droplet size={20} className="text-green700" />
                  <span className="font-medium text-lg">10%</span>
                </div>
              </div>

              <PredictionTable />

              <div className="flex flex-col gap-3">
                <div className="flex items-center text-green700 gap-2">
                  <Waves size={20} className="text-green700" />
                  <span className="font-medium text-lg">
                    Rivers susceptible to risks
                  </span>
                </div>

                <div className="flex gap-3 items-center mt-2 flex-wrap">
                  <RiverRiskTag type="warnin" name="River 1" />

                  <RiverRiskTag type="danger" name="River 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export const RegionDetailSkeleton = () => {
  return (
    <div className="animate-pulse">
      <DrawerHeader>
        <div className="h-4 bg-gray-300 rounded-md w-48 mb-4"></div>
      </DrawerHeader>

      <div className="px-4 flex flex-col">
        <div className="h-4 bg-gray-300 rounded-md w-32 mb-4"></div>

        <div className="flex gap-1">
          <div className="h-4 bg-gray-300 rounded-md w-8 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-8 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-8 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-8 mb-4"></div>
        </div>
      </div>

      <div className="px-4 flex flex-col">
        <div className="h-32 bg-gray-300 rounded-md w-full mb-4"></div>
        <div className="h-32 bg-gray-300 rounded-md w-full mb-4"></div>
        <div className="h-32 bg-gray-300 rounded-md w-full mb-4"></div>
      </div>

      {/* <DrawerFooter>
        <Button variant="outline" className="w-full text-red-400 border-red-400">
          Cancel
        </Button>
        <Button className="w-full bg-green600 hover:bg-green700">Save</Button>
      </DrawerFooter> */}
    </div>
  );
};
