import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer"
import { useState } from "react"
import { Marker, Polygon } from "react-leaflet"
import { RegionDetail } from "./region-detail"

export function FloatingMarker({
  region,
}: {
  region: any
}) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={() => {
      setOpen(false)
    }}>
      <DrawerTrigger asChild className="relative">
        <>
          <Marker position={[region.centralPoint.lat, region.centralPoint.lon]} eventHandlers={{
            click: () => {
              setOpen(true)
            }
          }} />
          <Polygon positions={region.coordinates} pathOptions={{ color: "#23e243", fillColor: "#000000" }}
            eventHandlers={{
              click: () => {
                setOpen(true)
              }
            }}
          />
        </>
      </DrawerTrigger>
      <DrawerContent className="z-50 bg-[#F6F6F6]">
        <div className="mx-auto w-full max-w-2xl h-[500px]">
          <RegionDetail id={region.uid} centralPoint={region.centralPoint} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}