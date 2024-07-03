import g from '../assets/Media/Group 12.png';
import i from '../assets/Media/Icons.png';
import a1 from '../assets/Media/boy.png';
import a2 from '../assets/Media/b-5.png';
import a3 from '../assets/Media/b3.png';
import a4 from '../assets/Media/b-4.png';
import a5 from '../assets/Media/g1.png';
import a6 from '../assets/Media/g2.png';
import { IoMdStar } from "react-icons/io";
// import { FaDollarSign } from "react-icons/fa";

const Graph = () => {
    return (
        <div className='container mx-auto p-5'>
            <div className="text-center items-center mt-5">
                <h1 className="text-5xl text-[#020043] font-bold">
                    Comprehensive Care for <br /> Every Patient
                </h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 justify-between items-end gap-4 mt-4">
                <div className="bg-[#FBFBFB] bg-opacity-80 p-5 shadow-lg rounded-btn self-end">
                    <h1 className="text-4xl pb-2">90%</h1>
                    <p className="pb-2">
                        Patient satisfaction <br /> rate, reflecting our <br /> commitment.
                    </p>
                    <img src={g} className='pl-10' alt="Graph depicting patient satisfaction rate" />
                </div>
                <div className="bg-[#FFFFF5] bg-opacity-80 p-5 shadow-lg rounded-btn self-end">
                    <h1 className="text-4xl pb-2">500+</h1>
                    <p className="pb-2">
                        Board-certified <br /> doctors
                    </p>
                    <img src={i} alt="Icons depicting board-certified doctors" className="pl-20" />
                </div>
                <div className="bg-[#FBFBFB] bg-opacity-80 p-5 shadow-lg rounded-btn self-end">
                    <h1 className="text-4xl pb-2 flex items-center">4.8 <IoMdStar className='text-yellow-400 ml-1' /> </h1>
                    <p className="pb-2">
                        Board-certified <br /> doctors
                    </p>
                    <div className='flex'>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={a1} alt="Doctor 1" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={a2} alt="Doctor 2" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={a3} alt="Doctor 3" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={a4} alt="Doctor 4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFF5] bg-opacity-80 p-5 shadow-lg rounded-btn self-end">
                    <h1 className="gap-0 text-4xl pb-2 flex items-center">
                        $500
                    </h1>
                    <p className="pb-2">
                        Money spent <br />
                        for poor patients
                    </p>
                    <img src={a5} alt="Icons depicting money spent for poor patients" className="pl-16" />
                </div>
                <div className="bg-[#FBFBFB] bg-opacity-80 p-5 drop-shadow-lg rounded-btn self-end">
                    <h1 className="text-4xl pb-2">90+</h1>
                    <p className="pb-4">
                        Free lesson videos <br /> for patients.
                    </p>
                    <img src={a6} alt="Graph depicting free lesson videos" />
                </div>
            </div>
        </div>
    );
};

export default Graph;
