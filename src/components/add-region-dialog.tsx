import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { MapPinned } from "lucide-react";
import { FarmersProvider } from "@/app/query-provider/farmers";
import toast from "react-hot-toast";

interface AddRegionDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  coordinates: { lat: number; lon: number }[];
}

export function AddRegionDialog({ isOpen, coordinates, handleClose }: AddRegionDialogProps) {
  const [regionName, setRegionName] = React.useState("");

  const { refetch } = FarmersProvider();

  async function addFarmer() {
    await toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: "Adding region...",
        success: "Region added!",
        error: "Failed to add region",
      })

    setRegionName("")
    handleClose();
    refetch();
  }

  // get the center of the polygon
  const center = coordinates.reduce(
    (acc, curr) => {
      acc.lat += curr.lat;
      acc.lon += curr.lon;
      return acc;
    },
    { lat: 0, lon: 0 }
  );

  return (
    <Dialog open={isOpen} modal={true} onOpenChange={() => handleClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new region</DialogTitle>
          <DialogDescription className="flex flex-col gap-2 items-start">
            <div className="flex items-center gap-2 mt-2">
              <MapPinned className="text-white400" size={20} />
              <span className="font-medium">Coordinates</span>
            </div>

            <span>{`${center.lat}, ${center.lon}`}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col mt-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Insert the region name"
              value={regionName}
              onChange={(e) => {
                setRegionName(e.target.value);
              }}
              className="pl-4"
            />
          </div>
        </div>
        <DialogFooter className="w-full mt-4 flex flex-col-reverse gap-2">
          <Button
            variant={"outline"}
            className="w-full text-red-400 border-red-400"
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
          <Button type="submit" className="w-full bg-green600 hover:bg-green700" onClick={addFarmer}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
