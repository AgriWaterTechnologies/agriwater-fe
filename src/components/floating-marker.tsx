import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer"
import { useState } from "react"
import { Marker, Polygon } from "react-leaflet"
import { RegionDetail } from "./region-detail"
import { IRegion } from "@/app/query-provider/farmers"
import locale from "@/assets/locale.svg";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: locale,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export function FloatingMarker({
  region,
}: {
  region: IRegion
}) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={() => {
      setOpen(false)
    }}>
      <DrawerTrigger asChild className="relative">
        <>
          <Marker icon={customIcon} position={[region.centralPoint.lat, region.centralPoint.lon]} eventHandlers={{
            click: () => {
              setOpen(true)
            }
          }} />
          <Polygon positions={region.coordinates as any} pathOptions={{ color: "#23e243", fillColor: "#000000" }}
            eventHandlers={{
              click: () => {
                setOpen(true)
              }
            }}
          />
        </>
      </DrawerTrigger>
      <DrawerContent className="z-50 bg-white">
        <div className="mx-auto w-full max-w-4xl h-[500px] overflow-auto">
          <RegionDetail id={region.id as any} centralPoint={region.centralPoint} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}