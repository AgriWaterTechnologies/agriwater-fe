import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export interface IFarmer {
  companyName: string;
  centralPoint: { lat: number; lon: number };
  regions: IRegion[];
}

export interface IRegion {
  id: string;
  name: string;
  type: string;
  centralPoint: { lat: number; lon: number };
  coordinates: { lat: number; lon: number }[];
  forecast?: ForecastDataItem;
}

export interface ForecastData {
  date: string;
  data: ForecastDataItem[];
}

export interface ForecastDataItem {
  hour: string;
  temperature: number;
  precipitation: number;
  humidity: number;
}

export function FarmersProvider() {
  async function fetchFarmers(): Promise<IFarmer["regions"]> {
    const { data } = await api.get<IFarmer["regions"]>("/regions");

    let currentData = [...data];

    if (currentData && currentData.length > 0) {
      const newData = currentData.map(async (region) => {
        // const { data } = await api.get<ForecastData[]>(
        //   `/forecast?lat=${region.centralPoint.lat}&lon=${region.centralPoint.lon
        //   }&sinceDate=${new Date().toISOString()}&untilDate=${new Date().toISOString()}`
        // );

        const mockForecastDataItem = {
          hour: "12:00",
          temperature: 25,
          precipitation: 0,
          humidity: 0,
        }

        return { ...region, forecast: mockForecastDataItem };
        // return { ...region, forecast: data[0].data[0] };
      });

      currentData = await Promise.all(newData);
    }
    return currentData;
  }

  const {
    data: farmers,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery<IFarmer["regions"]>({
    queryKey: ["farmers"],
    queryFn: () => fetchFarmers(),
    refetchInterval: 10000,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });

  return {
    farmers,
    isLoading,
    isRefetching,
    refetch,
  };
}
