
import AboutCompany from "@/components/AboutCompany";
import ContactUs from "@/components/ContactUs";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pt-36">
      <Banner />
      <StatsSection />
      <AboutCompany />
      <Testimonials />
      <Services />
      <ContactUs />

    </main>
  );
}
