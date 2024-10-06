import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { SquareX } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Wrapper className="justify-center flex h-full overflow-hidden">
      <div className="w-full max-w-4xl h-full">
        <div className="z-30 flex flex-col h-full rounded-lg bg-white px-6 gap-6">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <SquareX size={100} className="text-slate-400" />
            <h1 className="text-3xl font-bold text-slate-400">
              Page not found
            </h1>

            <Button
              className="w-full mt-6 bg-green600 max-w-20 hover:bg-green700"
              onClick={() => navigate(-1)}
            >
              Go back
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
