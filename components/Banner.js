import Image from "next/image";

export default function Banner() {
    return (
        <>

            <div className="lg:flex lg:flex-row flex-col lg:justify-start ">
                <div className=" flex-1 lg:justify-start lg:ml-5 lg:mt-40">
                    <div className=" flex justify-center  w-full item-center lg:flex-row lg:justify-start">
                        <div className="bg-blue-100 py-2 sm:py-1 rounded-3xl mb-10 flex flex-col mx-3 sm:mx-0 w-fit sm:flex-row sm:pr-4">
                            <div className="flex flex-row justify-center mb-3 sm:mb-0 sm:px-1">
                                <div className=" bg-blue-700 p-2 rounded-full w-fit">
                                    <Image
                                        src={
                                            "https://wpolive.com/html/manit-html/assets/images/slider/like.svg"
                                        }
                                        height={22}
                                        width={22}
                                        alt="image"
                                    ></Image>
                                </div>
                            </div>
                            <div className="text-blue-800 text-center mx-5 sm:mx-0 items-center justify-center sm:flex-row sm:flex">
                                <span className="sm:items-center">Create Your Dream Project With Us</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-blue-900 text-4xl sm:text-5xl text-center mb-6 sm:mx-10 lg:text-left  lg:mx-0">
                        <span className="font-semibold tracking-tight text-4xl sm:text-6xl ">
                            Best It <span className="text-yellow-500">Solution</span> For Your
                            Business
                        </span>
                        <div className=" text-lg text-center text-gray-600 font-sans mb-10 px-3 sm:px-10 lg:px-0 m-5 lg:mx-0 sm:m-10 sm:text-xl lg:text-left ">
                            <span className="leading-10">
                                Your success is our success. We prioritize understanding your unique
                                business requirements, tailoring solutions that not only meet your
                                needs but also exceed your expectations.
                            </span>
                        </div>
                    </div>


                    <div className="justify-center lg:justify-start">
                        <div className="m-auto lg:m-0 w-fit bg-blue-700 px-6 rounded-lg py-4 items-center mb-14 lg:justify-start border">
                            <div className="text-white font-semibold text-sm">
                                Get Started <span className="ml-1"> &rarr; </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col justify-end">
                    <svg viewBox="0 0 652 668" fill="orange" className="absolute w-full h-full lg:bottom-0 ">
                        <path d="M0 367.646C0 360.448 3.86838 353.805 10.129 350.252L622.129 2.95135C635.462 -4.6148 652 5.01565 652 20.3457V648C652 659.046 643.046 668 632 668H20C8.95432 668 0 659.046 0 648V367.646Z"></path>
                    </svg>

                    {/* complate */}
                    <div className="flex flex-col ">
                        <div className="flex flex-row justify-center">
                            <Image
                                src={"/images/download.png"}
                                width={600}
                                height={400}
                                alt="image"
                                className="justify-start items-start w-600 h-fit z-10 "
                            />
                        </div>
                        <div className="z-10  flex flex-row items-center  justify-center ">
                            <div className="flex flex-row drop-shadow-2xl bg-white rounded-3xl p-2 py-4 justify-center item-center -mt-[6rem]  px-10 ">
                                <div className="border border-blue-700 rounded-full p-1 mr-3">
                                    <div className="bg-blue-700 p-3 rounded-full">
                                        <Image
                                            src={"https://wpolive.com/html/manit-html/assets/images/slider/award.svg"}
                                            width={30}
                                            height={30}
                                            alt="image"
                                        />
                                    </div>
                                </div>
                                <div className="border-orange-500 rounded-xl text-black flex flex-col">
                                    <div className="flex flex-row items-center">
                                        <div className="font-extrabold text-4xl justify-center items-center flex flex-row">
                                            10<span className="text-2xl">+</span>
                                        </div>
                                    </div>
                                    <div className="text-gray-600">Years Of Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
