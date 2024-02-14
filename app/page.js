import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-2 pt-40">
      <div className="bg-blue-100 px-10 py-2 rounded-2xl m-auto w-fit mb-10">
        <div className="flex flex-row justify-center ">
          <div className=" bg-blue-700 p-2 rounded-full w-fit mb-1">
            <Image src={"https://wpolive.com/html/manit-html/assets/images/slider/like.svg"} height={22} width={22} alt="image"></Image>
          </div>
        </div>
        <div className="text-blue-900 text-center">
          <span>Create Your Dream Project With Us</span>
        </div>
      </div>

      <div className="text-blue-900 font-bold text-3xl text-center mb-4">
        <span className="">Best It <span className="text-orange-300">Solution</span>  For Your Business</span>
      </div>

      <div className=" text-lg text-center text-gray-500 font-sans mb-8">
        <span className="">Your success is our success. We prioritize understanding your unique business requirements, tailoring solutions that not only meet your needs but also exceed your expectations.</span>
      </div>

      <div className="justify-center mx-auto w-fit bg-blue-700 p-2 rounded-md px-4 items-center mb-8">
        <div className="text-white font-semibold text-sm">Get Started <span className="ml-1"> &rarr; </span></div>
      </div>

      <div className="item-center justify-center mx-10">
        <Image src={"/images/download.png"} width={0} height={0} layout="responsive" objectFit="contain" alt="image"></Image>
        <div className="drop-shadow-2xl bg-white rounded-xl flex flex-row p-2 items-center">
          <div className="border border-blue-700 rounded-full p-2 mr-3">
            <div className="bg-blue-700 p-3 rounded-full">
              <Image src={"https://wpolive.com/html/manit-html/assets/images/slider/award.svg"} width={30} height={30} alt="image"></Image>
            </div>
          </div>

          <div className="border-orange-500 rounded-xl text-black flex flex-col">
            <div className="flex flex-row items-center ">
              <div className="font-extrabold text-5xl justify-center items-center flex flex-row">10<span className="text-2xl">+</span></div>
            </div>

            <div className="text-gray-600">Years Of Experience</div>
          </div>
        </div>
      </div>





    </main>
  );
}
