import { List, Map } from "lucide-react";
import { Button } from "./ui/button";

export function FloatingMenu() {
  return (
    <div className="flex items-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2  z-50 p-2 bg-green600 w-[200px] rounded-full">
      <Button className="w-full rounded-full hover:bg-green700 bg-transparent shadow-none">
        <Map size={20} />
      </Button>

      <Button className="w-full rounded-full hover:bg-green700 bg-transparent shadow-none">
        <List size={20} />
      </Button>
    </div>
  )
}