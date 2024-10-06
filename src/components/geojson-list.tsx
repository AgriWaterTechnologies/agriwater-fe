import { useQuery } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";

import api from "@/app/services/api";

export function GeojsonList({ coordinates }: { coordinates: { lat: number; lon: number } }) {
  const fetchGeoJson = async () => {
    try {
      const { data } = await api.get("/forecast/image", {
        params: {
          type: "temperature",
          lat: coordinates.lat,
          lon: coordinates.lon,
          date: new Date().toISOString(),
          offset: 0,
        }
      });
      console.log({ data });

      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const { data } = useQuery({
    queryKey: ["geojson"],
    queryFn: async () => {
      await fetchGeoJson();
    },
  });

  console.log({ data })

  return (
    <div className="h-[180px] w-full my-4 flex items-start bg-gradient-to-r from-[#018062] to-[#01513E] p-4 rounded-md">
      <div className="flex flex-col items-start justify-between h-full w-full text-white50">
        <strong>Temperature</strong>
        <div>
          <p className="text-3xl">25°C</p>
          <small>Max.: 30 Mín.: 19</small>
        </div>

        <div className="flex items-center gap-1 mt-4">
          <AlertCircle size={16} />
          <small>Out of risk</small>
        </div>
      </div>
      <div className="h-full w-full">
        {/* <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={2} className="h-full w-full">
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=w7EUfSW9h5JMGIMOYhUO"
            attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {!!geoData && (
            <GeoJSON
              data={geoData}
              style={(feature) => {
                return getStyle((feature as GeoJsonFeature).properties.precip);
              }}
              onEachFeature={onEachFeature}
            />
          )}
        </MapContainer> */}
      </div>
    </div>
  );
}
