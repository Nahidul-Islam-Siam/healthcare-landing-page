import { LuArrowUpRight } from "react-icons/lu";
import service1 from '../assets/Media/Rectangle 27-2.png';
import service2 from '../assets/Media/Rectangle 27-1.png';
import service3 from '../assets/Media/Rectangle 27.png';

const Services = () => {
    return (
        <div className="container py-10 px-5 lg:px-0 mx-auto">
            <div className="space-y-20">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="w-full lg:w-1/2 px-5 mb-6 lg:mb-0 ">
                        <button className="btn btn-outline rounded-full mb-6 mt-0">Services</button>
                        <h2 className="text-4xl font-bold mb-4">Empowering Health, <br /> Enriching Lives</h2>
                        <p className="mb-6 text-[#4D4C7B]">
                            We are committed to providing high-quality,<br /> compassionate care to every patient we serve.<br /> Whatever your healthcare needs may be, you can trust <br /> us to be your partner in health and wellness.
                        </p>
                        <button className="btn btn-outline bg-[#FFC637] flex items-center mt-16">
                            Appointment <LuArrowUpRight className="ml-2" />
                        </button>
                    </div>
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start px-5">
                        <div className="relative">
                            <img src={service1} alt="Service 1" className="rounded-lg max-w-full h-auto" />
                            <div className="absolute bottom-4 left-0 right-0 bg-[#343268] bg-opacity-75 py-2 px-3 lg:py-3 lg:px-4 rounded-2xl text-white max-w-xs lg:left-10 lg:right-auto">
                           <div className="flex">
                           <div className="p-2">
                                    <h1 className="text-lg lg:text-xl mb-2 font-medium">Advanced</h1>
                                    <p className="text-sm lg:text-base text-[#FFFFFF] text-opacity-80">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                </div>
                                <div className="pt-16">
                                    <LuArrowUpRight className="ml-2 rounded-full bg-yellow-400" size={28} />
                                </div>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start px-5">
                        <div className="relative">
                            <img src={service2} alt="Service 2" className="rounded-lg max-w-full h-auto" />
                            <div className="absolute bottom-4 left-0 right-0 bg-[#343268] bg-opacity-75 py-2 px-3 lg:py-3 lg:px-4 rounded-2xl text-white max-w-xs lg:left-10 lg:right-auto">
                            <div className="flex">
                           <div className="p-2">
                                    <h1 className="text-lg lg:text-xl mb-2 font-medium">Advanced</h1>
                                    <p className="text-sm lg:text-base text-[#FFFFFF] text-opacity-80">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                </div>
                                <div className="pt-16">
                                    <LuArrowUpRight className="ml-2 rounded-full bg-yellow-400" size={28} />
                                </div>
                           </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start px-5">
                        <div className="relative">
                            <img src={service3} alt="Service 3" className="rounded-lg max-w-full h-auto" />
                            <div className="absolute bottom-4 left-0 right-0 bg-[#343268] bg-opacity-75 py-2 px-3 lg:py-3 lg:px-4 rounded-2xl text-white max-w-xs lg:left-10 lg:right-auto">
                            <div className="flex">
                           <div className="p-2">
                                    <h1 className="text-lg lg:text-xl mb-2 font-medium">Advanced</h1>
                                    <p className="text-sm lg:text-base text-[#FFFFFF] text-opacity-80">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                </div>
                                <div className="pt-16  ">
                                    <LuArrowUpRight className="ml-2 rounded-full bg-yellow-400" color="white" fontSize="1.7em" size={28} />
                                </div>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
