import { useParams } from "react-router-dom";
import { PageNotFound } from "./404";
import { RegionDetail } from "@/components/region-detail";
import { Dialog } from "@/components/ui/dialog";
// import { FarmersProvider } from "@/app/query-provider/farmers";

export function RegionDetails() {
  const { id } = useParams();
  //const { farmers } = FarmersProvider()

  //const region = farmers?.find((region) => region.id === id);

  if (!id) {
    return <PageNotFound />;
  }

  const data = {
    id: 1,
    name: "Região " + id.toString().slice(0, 12),
    idealCultivation: ["Tomate", "Batata", "Cenoura"],
    centralPoint: {
      lat: 51.505,
      lon: -0.09,
    },
  };

  return (
    <div className="w-full h-screen overflow-auto">
      <Dialog>
        {/* @ts-ignore */}
        <RegionDetail centralPoint={data.centralPoint} id={data.id} />
      </Dialog>
    </div>
  );
}
