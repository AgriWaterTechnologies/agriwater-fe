import { FloatingMenu } from "@/components/floating-menu";

import { Header } from "@/components/header";
import { RegionCard } from "@/components/rigion-card";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ListRegions() {
  const [searchParams, setSearchParams] = useState("");
  const mock = [
    {
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
        <Header title="Regions" />
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
                precipitation={{ probability: 50 }}
              />
            ))}
          </div>
        </div>
        <FloatingMenu />
      </div>
    </Wrapper>
  );
}
