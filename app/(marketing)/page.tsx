import HeroSection from "@/components/landing/hero-section";
import Particles from "@/components/magicui/particles";
import { Dock } from "lucide-react";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <Dock />
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
