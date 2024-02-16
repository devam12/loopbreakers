import Banner from "@/components/Banner";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-36">
      <Banner/>

      <StatsSection />

      <Services/>

    </main>
  );
}
