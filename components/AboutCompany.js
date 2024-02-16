import Image from "next/image";

export const AboutCompany = () => {
    return (
        <section class="text-gray-600 body-font bg-white">
            <div class="container px-5 py-24 mx-auto flex flex-wrap justify-center">
                <Image src={"/img-1.jpg"} className="lg:w-2/5 lg:mr-8 w-full lg:h-auto h-30 object-cover object-center rounded-lg" height={100} width={350} />
                <div class="w-full p-6 lg:w-1/2">
                    <h2 class="sm:text-lg text-lg text-blue-900 font-medium title-font mb-4">ABOUT COMPANY</h2>
                    <h2 class="lg:w-4/5 text-4xl font-medium mb-4">Our approach ensures flexibility, adaptability, & rapid response.</h2>
                    <p className="sm:text-lg lg:pt-6 leading-relaxed mb-4">
                        Welcome to Manit, where innovation meets implementation, & technology transforms possibilities into realities. Established with a vision to redefine the landscape of IT solutions, we are a dynamic and forward-thinking company committed to delivering cutting-edge services.
                    </p>
                    <p className="sm:text-lg lg:pt-6 leading-loose lg:mb-16 mb-8">
                        our mission is clear – to provide comprehensive and customized IT solution that align seamlessly with your business objectives. We believe in not just meeting but exceeding expectations.
                    </p>
                    <div className="lg:mb-8 mb-2">
                        <h1 className="text-3xl font-medium font-mono mb-3">
                            LoopBreakers
                        </h1>
                        <p className="uppercase">
                            CEO & Founder of Sir
                        </p>
                    </div>
                        <hr className="w-1/2"/>
                </div>
            </div>
        </section>
    );
}

export default AboutCompany;