// NEEDS REFACTOR
// THE CARD WILL DISPLAY A IMAGE RELATED TO THE PRECIPTATION OR TEMPERATURE


import { useQuery } from "@tanstack/react-query";
import { AlertCircle } from "lucide-react";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";

import { Feature, Geometry } from "geojson";

interface GeoJsonFeature extends Feature {
  properties: {
    precip: number;
  };
  geometry: Geometry;
}

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
      await fetchGeoJson();
    },
  });

  // Função para determinar o estilo com base na precipitação
  const getStyle = (precip: number) => {
    const styles: { [key: number]: L.PathOptions } = {
      1: { color: "#c0c0c0", fillOpacity: 0.2, weight: 0 },
      2: { color: "#018414", fillOpacity: 0.2, weight: 1 },
      3: { color: "#018c4e", fillOpacity: 0.2, weight: 1 },
      5: { color: "#02b331", fillOpacity: 0.2, weight: 1 },
      10: { color: "#57d005", fillOpacity: 0.2, weight: 1 },
      20: { color: "#b5e700", fillOpacity: 0.2, weight: 1 },
      40: { color: "#f9f602", fillOpacity: 0.2, weight: 1 },
      70: { color: "#fbc500", fillOpacity: 0.2, weight: 1 },
      120: { color: "#FF9400", fillOpacity: 0.2, weight: 1 },
      200: { color: "#FE0000", fillOpacity: 0.2, weight: 1 },
      350: { color: "#C80000", fillOpacity: 0.2, weight: 1 },
      600: { color: "#8F0000", fillOpacity: 0.2, weight: 1 },
    };
    return styles[precip] || { color: "blue", fillOpacity: 0.2, weight: 1 };
  };

  // Função para renderizar o GeoJSON no mapa
  const onEachFeature = (feature: GeoJsonFeature, layer: L.Layer) => {
    if (feature.properties && feature.properties.precip) {
      layer.bindPopup("Precipitação: " + feature.properties.precip + " mm");
    }
  };

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
        <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={2} className="h-full w-full">
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
        </MapContainer>
      </div>
    </div>
  );
}
