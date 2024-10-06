import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import geojsonTemp from "@/assets/geojson-temp.png";
import geojsonPrecip from "@/assets/geojson-precip.jpg";


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
          <p className="text-3xl">
            {type === "temperature" ? "25°C" : "403mm"}
          </p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <AlertCircle size={16} />
          <small>Out of risk</small>
        </div>
      </div>

      <div className="h-full max-h-max w-[300px] rounded">
        {/* {!hasLoaded && <div className="h-full w-full bg-white100 animate-pulse"></div>}

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
            {hasLoaded && (
              <img
                className="h-full w-full object-fit"
                src={geojsonTemp as string}
              />
            )}

            <img
              className="h-full w-full object-fit"
              src={geojsonTemp as string}
            />
          </MapContainer>
        )} */}

        {type === "temperature" && <img src={geojsonTemp} alt="geojson" className="h-full w-full object-fit rounded-md" />}
        {type === "precipitation" && <img src={geojsonPrecip} alt="geojson" className="h-full w-full object-fit rounded-md" />}
      </div>
    </div>
  );
}
