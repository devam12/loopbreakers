import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="flex flex-col mb-48" id="services">
            {/* <div className="relative w-full">
                <span className="relative z-10  justify-center w-full top-40 text-center text-purple-400 mb-10 block text-lg font-medium uppercase font-inter">Our Services</span>
                <span className="relative z-10  justify-center w-full top-48 text-center text-white mb-10 block font-inter text-3xl leading-10 font-bold m-0 capitalize font-dm-sans">Design the Concept of Your Business Idea Now</span>
                <Image src={"/images/services-bg.jpeg"} width={400} height={100} className="w-full h-full object-cover" layout="responsive" alt="background image" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent bg-opacity-92"></div>

            </div> */}
            <div className="relative w-full">
                <div className="absolute inset-20 flex flex-col justify-start items-center z-10">
                    <span className="text-violet-700 text-lg font-medium uppercase font-inter ">Our Services</span>
                    <span className="text-white text-4xl leading-10 mx-12 font-bold capitalize font-dm-sans">Design the Concept of Your Business Idea Now</span>
                </div>
                <Image src={"/images/services-bg.jpeg"} width={400} height={100} className="w-full h-full object-cover" layout="responsive" alt="background image" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent bg-opacity-10"></div>
            </div>


            <div className="lg:px-5 -my-48 z-10">
                <div className="flex flex-col lg:flex-row z-10 w-full justify-center items-center lg:space-x-4 lg:px-5">
                    <ServiceCard title={"UI/UX"} desc={"We are providing the best UI/UX design. That helps you be professional."} svgcolor={"#8956B3"} svgicon="svg/ui-ux.svg" number={1}/>
                    <ServiceCard title={"Web App"} desc={"We are providing the best Web App design. That helps you be professional."} svgcolor={"#F2BC00"} svgicon="svg/pc.svg" number={2}/>
                    <ServiceCard title={"Mobile App"} desc={"We are providing the best Monbile App. That helps you be professional."} svgcolor={"#F97D7F"} svgicon="svg/mobile.svg" number={3}/>
                    <ServiceCard title={"Research"} desc={"We are providing the best Research design. That helps you be professional."} svgcolor={"#7DC370"} svgicon="svg/search.svg" number={4}/>
                </div>
            </div>

        </div>
    );
}
