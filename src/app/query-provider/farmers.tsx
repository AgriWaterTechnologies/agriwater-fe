import { useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast";


const mock = [
  {
    companyName: "AgroTech Soluções",
    centralPoint: { lat: -12.6417, lon: -56.1325 },
    regions: [
      {
        uid: "1b9c5a26-24a6-4e56-b0e3-8ed195aa7f4b",
        name: "Plantação de Soja",
        type: "Plantação",
        centralPoint: { lat: -12.6425, lon: -56.13 },
        coordinates: [
          { lat: -12.642, lon: -56.1295 },
          { lat: -12.643, lon: -56.1295 },
          { lat: -12.6435, lon: -56.1305 },
          { lat: -12.6425, lon: -56.131 },
        ],
      },
      {
        uid: "9c6614e0-77b3-43fc-8997-2f9a2a8f3a92",
        name: "Plantação de Milho",
        type: "Plantação",
        centralPoint: { lat: -12.6435, lon: -56.132 },
        coordinates: [
          { lat: -12.6425, lon: -56.1315 },
          { lat: -12.6435, lon: -56.131 },
          { lat: -12.644, lon: -56.132 },
          { lat: -12.643, lon: -56.1325 },
        ],
      },
      {
        uid: "3e788f5e-baa8-41e8-9170-bd91e25b6861",
        name: "Área de Irrigação",
        type: "Irrigação",
        centralPoint: { lat: -12.644, lon: -56.133 },
        coordinates: [
          { lat: -12.6435, lon: -56.1325 },
          { lat: -12.6445, lon: -56.132 },
          { lat: -12.645, lon: -56.133 },
          { lat: -12.644, lon: -56.1335 },
        ],
      },
      {
        uid: "e3c5d3a6-f14b-4a71-b44b-e96e30f8c882",
        name: "Área de Armazenamento",
        type: "Armazém",
        centralPoint: { lat: -12.642, lon: -56.134 },
        coordinates: [
          { lat: -12.6415, lon: -56.1335 },
          { lat: -12.6425, lon: -56.133 },
          { lat: -12.643, lon: -56.134 },
          { lat: -12.642, lon: -56.1345 },
        ],
      },
    ],
  },
  {
    companyName: "CampoVerde Agro",
    centralPoint: { lat: -16.015, lon: -52.1505 },
    regions: [
      {
        uid: "c55a0f5f-dbd8-43f5-8178-5cf1708e32e8",
        name: "Plantação de Trigo",
        type: "Plantação",
        centralPoint: { lat: -16.016, lon: -52.151 },
        coordinates: [
          { lat: -16.0155, lon: -52.1505 },
          { lat: -16.0165, lon: -52.1505 },
          { lat: -16.017, lon: -52.1515 },
          { lat: -16.016, lon: -52.152 },
        ],
      },
      {
        uid: "2a8148b0-98d6-42de-8e07-0d6e3452f4f0",
        name: "Plantação de Milho",
        type: "Plantação",
        centralPoint: { lat: -16.0155, lon: -52.152 },
        coordinates: [
          { lat: -16.015, lon: -52.1515 },
          { lat: -16.016, lon: -52.1515 },
          { lat: -16.0165, lon: -52.1525 },
          { lat: -16.0155, lon: -52.153 },
        ],
      },
      {
        uid: "1b19c893-6503-4873-a607-f44ef249b68c",
        name: "Área de Irrigação",
        type: "Irrigação",
        centralPoint: { lat: -16.014, lon: -52.151 },
        coordinates: [
          { lat: -16.0135, lon: -52.1505 },
          { lat: -16.0145, lon: -52.1505 },
          { lat: -16.015, lon: -52.1515 },
          { lat: -16.014, lon: -52.152 },
        ],
      },
      {
        uid: "65d36dc1-3be0-4631-8e93-ef14f327ff8c",
        name: "Área de Armazenamento",
        type: "Armazém",
        centralPoint: { lat: -16.0155, lon: -52.1535 },
        coordinates: [
          { lat: -16.015, lon: -52.153 },
          { lat: -16.016, lon: -52.1525 },
          { lat: -16.0165, lon: -52.1535 },
          { lat: -16.0155, lon: -52.154 },
        ],
      },
    ],
  },
  {
    companyName: "VerdeFloresta",
    centralPoint: { lat: -3.469, lon: -62.216 },
    regions: [
      {
        uid: "f8881d37-4c58-4a58-9f4f-2c7d5c43c2a7",
        name: "Área de Reflorestamento",
        type: "Reflorestamento",
        centralPoint: { lat: -3.4695, lon: -62.2155 },
        coordinates: [
          { lat: -3.469, lon: -62.215 },
          { lat: -3.47, lon: -62.2145 },
          { lat: -3.4705, lon: -62.2155 },
          { lat: -3.4695, lon: -62.216 },
        ],
      },
      {
        uid: "39eeb408-bcd3-4f73-bc58-4e4ee9314fd0",
        name: "Área de Castanhas",
        type: "Plantação",
        centralPoint: { lat: -3.4685, lon: -62.2165 },
        coordinates: [
          { lat: -3.468, lon: -62.216 },
          { lat: -3.469, lon: -62.2155 },
          { lat: -3.4695, lon: -62.2165 },
          { lat: -3.4685, lon: -62.217 },
        ],
      },
      {
        uid: "8b3884bb-9fa7-44b2-b3ed-b4a5e8ca16f5",
        name: "Área de Exploração de Madeira",
        type: "Silvicultura",
        centralPoint: { lat: -3.4675, lon: -62.217 },
        coordinates: [
          { lat: -3.467, lon: -62.2165 },
          { lat: -3.468, lon: -62.216 },
          { lat: -3.4685, lon: -62.217 },
          { lat: -3.4675, lon: -62.2175 },
        ],
      },
      {
        uid: "ecf42346-c97e-4797-a036-881ba3a139d3",
        name: "Área de Pesquisa em Biodiversidade",
        type: "Pesquisa",
        centralPoint: { lat: -3.47, lon: -62.218 },
        coordinates: [
          { lat: -3.4695, lon: -62.2175 },
          { lat: -3.4705, lon: -62.217 },
          { lat: -3.471, lon: -62.218 },
          { lat: -3.47, lon: -62.2185 },
        ],
      },
    ],
  },
];

interface IFarmer {
  companyName: string;
  centralPoint: { lat: number; lon: number };
  regions: IRegion[];
}

interface IRegion {
  uid: string;
  name: string;
  type: string;
  centralPoint: { lat: number; lon: number };
  coordinates: { lat: number; lon: number }[];
}

export function FarmersProvider() {
  async function fetchFarmers() {
    await toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: "Updating regions...",
        success: "Regions loaded!",
        error: "Failed to load regions",
      }
    )

    return mock;
  }

  const { data: farmers, isLoading, isRefetching, refetch } = useQuery<IFarmer[]>({
    queryKey: ["farmers"],
    queryFn: () => fetchFarmers(),
  })

  return {
    farmers,
    isLoading,
    isRefetching,
    refetch
  }
}