import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer"
import { useState } from "react"
import { Marker, Polygon } from "react-leaflet"
import { DrawerDetail } from "./drawer-detail"

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
          <Marker position={[region.centralPoint.lat, region.centralPoint.lng]} eventHandlers={{
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
        <div className="mx-auto w-full max-w-sm h-[500px]">
          <DrawerDetail id={region.uid} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}