import AboutCompany from "@/components/AboutCompany";
import ContactUs from "@/components/ContactUs";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <StatsSection/>
    <AboutCompany/>
    <Testimonials/>
    <ContactUs/>
    </>
  );
}
