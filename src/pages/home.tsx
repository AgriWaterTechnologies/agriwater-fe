import { FloatingMenu } from "@/components/floating-menu";
import { Map } from "@/components/map";
import Wrapper from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper className="pt-0 pb-0">
      <div className="z-30 flex h-full rounded-lg bg-white50">
        <Map />
      </div>
      <FloatingMenu />
    </Wrapper>
  );
}
