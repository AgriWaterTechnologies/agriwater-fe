import { useQuery } from "@tanstack/react-query";
import { Sprout } from "lucide-react";
import { GeojsonList } from "./geojson-list";
import { DrawerHeader, DrawerTitle } from "./ui/drawer";

export function RegionDetail({
  id,
  centralPoint,
}: {
  centralPoint: {
    lat: number;
    lng: number;
  };
  id: number;
}) {
  const { data: region, isLoading } = useQuery({
    queryKey: ["region", id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        id,
        name: "Region " + id.toString().slice(0, 12),
        idealCultivation: ["Tomato", "Potato", "Carrot"],
        centralPoint: {
          lat: centralPoint.lat,
          lng: centralPoint.lng,
        },
      };
    },
  });

  console.log({
    region,
    isLoading,
  });

  return (
    <>
      {isLoading && <RegionDetailSkeleton />}

      {region && !isLoading && (
        <div className="">
          <DrawerHeader>
            <DrawerTitle>{region.name}</DrawerTitle>
          </DrawerHeader>

          <div className="p-4 flex flex-col">
            <div>
              <div className="flex items-center text-green700 gap-2">
                <Sprout size={20} className="text-green700" />
                <span className="font-medium">Ideal cultivation</span>
              </div>

              <div className="flex gap-2 items-center mt-2">
                {region?.idealCultivation.map((cultivation) => (
                  <div key={cultivation} className="text-gray-400 text-sm py-1 px-2 rounded bg-white200">
                    {cultivation}
                  </div>
                ))}
              </div>
            </div>

            <GeojsonList coordinates={region.centralPoint} />
          </div>
        </div>
      )}
    </>
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
