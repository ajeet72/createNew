import CursorGradient from "@/components/cursorGradient";
import HeroSection from "@/components/hero";
import ServiceSection from "@/components/serviceSection";
import TopBar from "@/components/topbar";

export default function Home() {
  return (
    <main className="relative">
      <CursorGradient />
      <div className="relative z-10">
        <TopBar />
        <HeroSection id="home"/>
        <ServiceSection id="services"/>
      </div>
    </main>
  );
}