import CursorGradient from "@/components/cursorGradient";
import HeroSection from "@/components/hero";
import TopBar from "@/components/topbar";

export default function Home() {
  return (
    <main className="relative">
      <CursorGradient />
      <div className="relative z-10">
        <TopBar />
        <HeroSection id="home"/>
      </div>
    </main>
  );
}