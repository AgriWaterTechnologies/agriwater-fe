import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import { useRef, useState } from "react";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { FloatingMarker } from "./floating-marker";
import { EditControl } from "react-leaflet-draw";
import { AddRegionDialog } from "./add-region-dialog";
import { FarmersProvider } from "@/app/query-provider/farmers";

export function Map() {
  const { farmers, isLoading } = FarmersProvider();

  const featureGroupRef = useRef<L.FeatureGroup>(null);
  const [creatingRegion, setCreatingRegion] = useState({
    open: false,
    coords: [],
  });

  const _onCreate = (e: any) => {
    const { layerType, layer } = e;

    if (layerType === "polygon") {
      const newCoords = layer.getLatLngs()[0].map((latLng: any) => ({
        lat: latLng.lat,
        lon: latLng.lng,
      }));

      setCreatingRegion({ open: true, coords: newCoords });
    }
  };

  const _closeCreatingRegion = () => {
    setCreatingRegion({ open: false, coords: [] });

    if (featureGroupRef.current) {
      featureGroupRef.current
        .getLayers()
        .find((layer) => layer instanceof L.Polygon)
        ?.remove();
    }
  };

  return (
    <>
      <AddRegionDialog
        isOpen={creatingRegion.open}
        coordinates={creatingRegion.coords}
        handleClose={_closeCreatingRegion}
      />

      <MapContainer
        // center in brazil
        center={[-15.77972, -47.92972]}
        zoom={5}
        minZoom={2.5}
        maxZoom={17}
        style={{ height: "100%", width: "100%", zIndex: 10 }}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
      >
        <FeatureGroup ref={featureGroupRef}>
          {/* <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=w7EUfSW9h5JMGIMOYhUO"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        /> */}

          <EditControl
            position="topleft"
            onCreated={_onCreate}
            edit={{
              edit: false,
              remove: false,
            }}
            draw={{
              rectangle: false,
              polyline: false,
              circle: false,
              circlemarker: false,
              marker: false,
            }}
          />

          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a> | Esri, Maxar, Earthstar Geographics, and the GIS User Community'
          />

          {!isLoading &&
            farmers?.map((item, index) => (
              <div key={index}>
                <FloatingMarker region={item} />
              </div>
            ))}
        </FeatureGroup>
      </MapContainer>
    </>
  );
}
