import { useQuery } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";
import { GeoJSON, MapContainer } from "react-leaflet";

export function GeojsonList({ coordinates }: { coordinates: { lat: number; lng: number } }) {
  const fetchGeoJson = async () => {
    const geojsonUrl =
      "https://pmmpublisher.pps.eosdis.nasa.gov/products/gpm_1d/export/r03/2024/278/gpm_1d.20241004.geojson";
    fetch(geojsonUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        return data;
      })
      .catch((error) => console.error("Erro ao carregar GeoJSON:", error));
  };

  const { data: geoData } = useQuery({
    queryKey: ["geojson"],
    queryFn: async () => {
      fetchGeoJson();
    },
  });

  return (
    <div className="h-[180px] w-full my-4 flex items-start bg-gradient-to-r from-[#018062] to-[#01513E] p-4 rounded-md">
      <div className="flex flex-col items-start justify-between h-full w-full text-white50">
        <strong>Temperatura</strong>
        <div>
          <p className="text-3xl">25°C</p>
          <small>Max.: 30 Mín.: 19</small>
        </div>

        <div className="flex items-center gap-1 mt-4">
          <AlertCircle size={16} />
          <small>Fora de risco</small>
        </div>
      </div>
      <div className="h-full w-full">
        <MapContainer
          center={[coordinates.lat, coordinates.lng]}
          zoom={10}
          className="h-full w-full"
          style={{}}
        >
          {!!geoData && <GeoJSON data={geoData} />}
        </MapContainer>
      </div>
    </div>
  );
}
