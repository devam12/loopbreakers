import Image from "next/image";

export default function Banner() {
    return (
        <>
            <div className=" flex justify-center  w-full item-center">
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

            <div className="text-blue-900  text-4xl sm:text-5xl text-center mb-6 mx-1 sm:mx-10">
                <span className="font-semibold tracking-tight text-4xl sm:text-6xl">
                    Best It <span className="text-yellow-500">Solution</span> For Your
                    Business
                </span>
                <div className=" text-lg text-center text-gray-600 font-sans mb-10 px-3 sm:px-10 m-5 sm:m-10 sm:text-xl">
                    <span className="leading-10">
                        Your success is our success. We prioritize understanding your unique
                        business requirements, tailoring solutions that not only meet your
                        needs but also exceed your expectations.
                    </span>
                </div>
            </div>



            <div className="justify-center mx-auto w-fit bg-blue-700 px-6 rounded-lg py-4 items-center mb-14">
                <div className="text-white font-semibold text-sm">
                    Get Started <span className="ml-1"> &rarr; </span>
                </div>
            </div>

            <div className="flex flex-col justify-center bordar border-r-amber-200">
                <Image
                    src={"/images/download.png"}
                    width={200}
                    height={0}
                    alt="image"
                    className="justify-center item-center w-full"
                ></Image>
                <div className="flex flex-row drop-shadow-2xl bg-white rounded-xl p-2 py-4 justify-center item-center m-auto -mt-[5rem] px-5">
                    <div className="border border-blue-700 rounded-full p-1 mr-3 ">
                        <div className="bg-blue-700 p-3 rounded-full">
                            <Image
                                src={
                                    "https://wpolive.com/html/manit-html/assets/images/slider/award.svg"
                                }
                                width={30}
                                height={30}
                                alt="image"
                            ></Image>
                        </div>
                    </div>

                    <div className="border-orange-500 rounded-xl text-black flex flex-col ">
                        <div className="flex flex-row items-center ">
                            <div className="font-extrabold text-4xl justify-center items-center flex flex-row">
                                10<span className="text-2xl">+</span>
                            </div>
                        </div>

                        <div className="text-gray-600">Years Of Experience</div>
                    </div>
                </div>
            </div>
        </>
    );
}
