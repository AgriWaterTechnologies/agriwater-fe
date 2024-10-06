import { DialogTitle } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { DrawerClose, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "./ui/drawer";
import { Button } from "./ui/button";
import { Sprout } from "lucide-react";
import { GeojsonList } from "./geojson-list";

export function DrawerDetail({ id }: { id: number }) {
  const { data: region, isLoading } = useQuery({
    queryKey: ["region", id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        id,
        name: "Região " + id.toString().slice(0, 12),
        idealCultivation: ["Tomate", "Batata", "Cenoura"],
        centralPoint: {
          lat: 51.505,
          lng: -0.09,
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
      {isLoading && <DialogTitle>Loading...</DialogTitle>}

      {region && !isLoading && (
        <div className="">
          <DrawerHeader>
            <DrawerTitle>{region.name}</DrawerTitle>
          </DrawerHeader>

          <div className="p-4 flex flex-col">
            <div>
              <div className="flex items-center text-green700 gap-2">
                <Sprout size={20} className="text-green700" />
                <span className="font-medium">Cultivação ideal</span>
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

          {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
        </div>
      )}
    </>
  );
}
