import HeroSection from "@/components/landing/hero-section";
import Particles from "@/components/magicui/particles";
import { Dock } from "lucide-react";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <Dock
        className="absolute z-10 bottom-0 left-0 right-0"
        size={40}
        color="#ffffff"
      />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.5}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
