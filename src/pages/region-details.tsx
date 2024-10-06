import { useParams } from "react-router-dom";
import { PageNotFound } from "./404";
import { RegionDetail } from "@/components/region-detail";
import { Dialog } from "@/components/ui/dialog";

export function RegionDetails() {
  const { id } = useParams();

  if (!id) {
    return <PageNotFound />;
  }

  const data = {
    id: 1,
    name: "Região " + id.toString().slice(0, 12),
    idealCultivation: ["Tomate", "Batata", "Cenoura"],
    centralPoint: {
      lat: 51.505,
      lng: -0.09,
    },
  };

  return <Dialog><RegionDetail centralPoint={data.centralPoint} id={data.id} /></Dialog>
}
