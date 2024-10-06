import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";


export function Geojson({ coordinates, type }: { coordinates: { lat: number; lon: number }, type: string }) {
  const imageURL = `https://api.agriwater.us/forecast/image?type=${type}&lat=${coordinates.lat}&lon=${coordinates.lon}&date=${new Date().toISOString()}&offset=1.5`
  const [hasLoaded, setHasLoaded] = useState(false)

  // add a event listener to check if the image is loaded
  // if not, add a loader

  useEffect(() => {
    const img = new Image();
    img.src = imageURL as string;
    img.onload = () => {
      setHasLoaded(true)
    }
  }, [imageURL])

  console.log({ hasLoaded })

  return (
    <div className="h-[150px] w-full flex items-start bg-gradient-to-r from-[#018062] to-[#01513E] p-4 rounded-md">
      <div className="flex flex-col items-start justify-between h-full w-full text-white50">
        <strong>{type === "temperature" ? "Temperature" : "Preciptation"}</strong>
        <div>
          <p className="text-3xl">25°C</p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <AlertCircle size={16} />
          <small>Out of risk</small>
        </div>
      </div>

      <div className="h-full max-h-max w-max rounded">
        {!hasLoaded && <div className="h-full w-full bg-white100 animate-pulse"></div>}

        {hasLoaded && (
          <MapContainer
            zoom={1}
            minZoom={2.5}
            style={{ height: "100%", width: "100%", zIndex: 10 }}
            zoomControl={false}
            maxBounds={[
              [-90, -180],
              [90, 180],
            ]}
          >
            {/* <TileLayer
              url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=w7EUfSW9h5JMGIMOYhUO"
              attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            /> */}
            {/* <ImageOverlay url={imageURL as string} bounds={
              [
                [coordinates.lat - 0.5, coordinates.lon - 0.5],
                [coordinates.lat + 0.5, coordinates.lon + 0.5]
              ]
            } /> */}
            {hasLoaded && (
              <img
                className="h-full w-full object-fit"
                src={imageURL as string}
              />
            )}
          </MapContainer>
        )}
      </div>
    </div>
  );
}
