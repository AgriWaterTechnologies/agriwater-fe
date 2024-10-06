import { FloatingMenu } from "@/components/floating-menu";

import { Header } from "@/components/header";
import { RegionCard } from "@/components/rigion-card";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper";
import { FileSearch, Search } from "lucide-react";
import { useState } from "react";

export default function ListRegions() {
  const [searchParams, setSearchParams] = useState("");
  const mock = [
    {
      id: 1,
      name: "Nasa",
      max: 34,
      min: 21,
      current: 23,
      risk: "Low",
      precipitation: {
        probability: 50,
      },
    },
    {
      id: 2,
      name: "Rio Grande",
      max: 34,
      min: 21,
      current: 23,
      risk: "Low",
      precipitation: {
        probability: 50,
      },
    },
    {
      id: 3,
      name: "Amazonas",
      max: 34,
      min: 21,
      current: 23,
      risk: "Low",
      precipitation: {
        probability: 50,
      },
    },
  ];

  const filteredRegions = mock.filter((region) =>
    region.name.toLowerCase().includes(searchParams.toLowerCase())
  );

  return (
    <Wrapper className="justify-center flex h-full overflow-hidden">
      <div className="w-full max-w-4xl h-full">
        <Header title="Regions" disableBackButton />
        <div className="z-30 flex flex-col h-full rounded-lg bg-white px-6 gap-6">
          <Input
            startIcon={<Search size={18} className="text-white400" />}
            rootClassName="w-full"
            placeholder="Search regions..."
            onChange={(e) => setSearchParams(e.target.value)}
            value={searchParams}
          />
          <div className="flex flex-col w-full gap-4 overflow-auto mb-28">
            {filteredRegions.map((region) => (
              <RegionCard
                key={region.name}
                name={region.name}
                max={region.max}
                min={region.min}
                current={region.current}
                risk={region.risk}
                id={region.id}
                precipitation={{ probability: 50 }}
              />
            ))}
            {filteredRegions.length === 0 && (
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
