import { FarmersProvider } from "@/app/query-provider/farmers";
import { FloatingMenu } from "@/components/floating-menu";

import { Header } from "@/components/header";
import { RegionCard } from "@/components/rigion-card";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper";
import { FileSearch, Search } from "lucide-react";
import { useState } from "react";

export default function ListRegions() {
  const [searchParams, setSearchParams] = useState("");
  const { farmers } = FarmersProvider();

  const filteredRegions = farmers?.filter((region) =>
    region.name.toLowerCase().includes(searchParams.toLowerCase())
  );

  return (
    <Wrapper className="justify-center flex h-full overflow-hidden">
      <Header title="Regions" disableBackButton />
      <div className="w-full max-w-4xl h-full overflow-hidden pt-12">
        <div className="z-30 flex flex-col h-full rounded-lg bg-white px-6 gap-6 overflow-hidden pb-14">
          <Input
            startIcon={<Search size={18} className="text-white400" />}
            rootClassName="w-full"
            className="outline-none"
            placeholder="Search regions..."
            onChange={(e) => setSearchParams(e.target.value)}
            value={searchParams}
          />
          <div className="flex flex-col w-full h-screen gap-4 overflow-auto pb-10">
            {filteredRegions && filteredRegions?.length > 0 && filteredRegions?.map((region) => (
              <RegionCard
                key={region.id}
                name={region.name}
                max={(region?.forecast?.temperature && region?.forecast?.temperature + 2)?.toFixed(0) || 0}
                min={(region?.forecast?.temperature && region?.forecast?.temperature - 11)?.toFixed(0) || 0}
                current={region.forecast?.temperature.toFixed(0) || 0}
                risk={"Normal"}
                id={region.id}
                precipitation={{ probability: 50 }}
              />
            ))}
            {!filteredRegions || filteredRegions?.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-3 py-12">
                <FileSearch size={32} className="text-white400" />
                <p className="text-white400 text-2xl">No regions found</p>
              </div>
            )}
          </div>
        </div>
        <FloatingMenu />
      </div>
    </Wrapper>
  );
}
