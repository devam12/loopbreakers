import Image from "next/image";

export default function ServiceCard({ title, desc, link = "#", svgcolor = "red", svgicon, number = 1 }) {
    return (
        <div className=" flex flex-col relative bg-white text-black rounded-md p-5 w-fit justify-center mb-12 drop-shadow-2xl">
            <svg viewBox="0 0 112 107" fill={svgcolor} className="absolute top-0 right-10 w-20 h-full z-10 transform translate-x-1/3 -translate-y-1/2 ">
                <path id="Bg5" d="M67.9706 0.555039C89.2118 -0.484865 110.489 16.3952 111.529 37.6365C112.568 58.8777 92.9541 105.645 71.7129 106.685C50.4716 107.725 1.72311 63.4921 0.683209 42.2509C-0.356694 21.0097 46.7293 1.59494 67.9706 0.555039Z"></path>
            </svg>
            <span className="text-white absolute top-0 right-0 w-20 h-full z-10 transform translate-x-2 -translate-y-5 text-4xl font-bold">0{number}</span>
            <div className="mt-10 mb-5">
                <Image src={svgicon} alt="first" width={40} height={10} />
            </div>
            <div className="text-3xl font-semibold mb-3">{title}</div>
            <span className="text-gray-700 text-base font-normal leading-7 mb-5">{desc}</span>
            {/* <h3>
                <a href={link}>
                    <span className="text-yellow-500 text-lg font-medium underline leading-8">Learn More <span>&rarr;</span></span>
                </a>
            </h3> */}
        </div>
    );
}
