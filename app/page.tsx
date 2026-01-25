import CursorGradient from "@/components/cursorGradient";
import TopBar from "@/components/topbar";

export default function Home() {
  return (
    <main className="relative">
      <CursorGradient />
      <div className="relative z-10">
        <TopBar />
      </div>
    </main>
  );
}