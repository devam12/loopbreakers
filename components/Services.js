import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="flex flex-col mb-48" id="services">
            <div className="relative w-full">
                <Image src={"/images/services-bg.jpeg"} width={400} height={100} className="w-full h-full object-cover" layout="responsive" alt="background image" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent bg-opacity-92"></div>
            </div>

            <div className="lg:px-5 -my-40">
                <div className="flex flex-col lg:flex-row z-10 w-full justify-center items-center lg:space-x-4 lg:px-5">
                    <ServiceCard title={"UI/UX Design"} desc={"We are providing the best UI/UX design. That helps you be professional."} svgcolor={"#8956B3"} svgicon="svg/ui-ux.svg" />
                    <ServiceCard title={"Web App"} desc={"We are providing the best UI/UX design. That helps you be professional."} svgcolor={"#F2BC00"} svgicon="svg/pc.svg" />
                    <ServiceCard title={"Mobile App"} desc={"We are providing the best UI/UX design. That helps you be professional."} svgcolor={"#F97D7F"} svgicon="svg/mobile.svg" />
                    <ServiceCard title={"Software Developer"} desc={"We are providing the best UI/UX design. That helps you be professional."} svgcolor={"#7DC370"} svgicon="svg/search.svg" />
                </div>
            </div>

        </div>
    );
}
