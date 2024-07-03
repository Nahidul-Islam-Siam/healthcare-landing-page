import { LuArrowUpRight } from "react-icons/lu";
import about from '../assets/Media/Rectangle 24.png';

const AboutUs = () => {
    return (
        <div className="relative py-10 px-5 lg:px-0">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="w-full lg:w-1/2 px-5 mb-6 lg:mb-0">
                    <button className="btn btn-outline rounded-full mb-6 mt-0">Who we are</button>
                    <h2 className="text-4xl font-bold mb-4">We Help To Get Solutions</h2>
                    <p className="mb-6 text-[#4D4C7B]">
                        We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <button className="btn btn-outline bg-[#FFC637] flex items-center mt-16">
                        Learn More <LuArrowUpRight className="ml-2" />
                    </button>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-5">
                    <img src={about} alt="About Us" className="rounded-lg max-w-full h-auto" />
                </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#343268] py-3 px-3 lg:py-4 lg:px-4 rounded-3xl text-white mb-6 max-w-sm w-10/12">
                <div className="p-3">
                    <h1 className="text-xl lg:text-2xl mb-2 font-medium">Our mission is simple</h1>
                    <p className="text-sm lg:text-base text-[#FFFFFF] text-opacity-80">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
