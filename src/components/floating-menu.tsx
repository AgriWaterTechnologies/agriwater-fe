import { List, Map } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export function FloatingMenu() {
  const { pathname } = useLocation();

  const isCurrentRoute = (path: string) => {
    const options = {
      home: pathname === "/",
      listRegions: pathname === "/list-regions",
    };

    return options[path as keyof typeof options];
  };

  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2  z-50 p-2 bg-green600 w-[200px] rounded-full">
      <Button
        className={cn(
          "w-full rounded-full hover:bg-green700 bg-transparent shadow-none",
          isCurrentRoute("home") && "bg-green700"
        )}
        onClick={() => navigate("/")}
      >
        <Map size={20} />
      </Button>

      <Button
        className={cn(
          "w-full rounded-full hover:bg-green700 bg-transparent shadow-none",
          isCurrentRoute("listRegions") && "bg-green700"
        )}
        onClick={() => navigate("/list-regions")}
      >
        <List size={20} />
      </Button>
    </div>
  );
}
