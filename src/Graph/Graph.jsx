import g from '../assets/Media/Group 12.png';
import i from '../assets/Media/Icons.png';

const Graph = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl text-[#020043] font-bold">
                    Comprehensive Care for <br/> Every Patient
                </h1>
            </div>
            <div className="flex p-5 space-x-5">
                <div className="bg-[#FBFBFB] bg-opacity-80 p-5 shadow-lg rounded">
                    <h1 className="text-4xl pb-2">90%</h1>
                    <p className="pb-2">
                        Patient satisfaction <br/> rate, reflecting our <br/> commitment.
                    </p>
                    <img src={g} alt="Graph depicting patient satisfaction rate" />
                </div>
                <div className="bg-[#FBFBFB] bg-opacity-80 p-5 shadow-lg rounded flex flex-col">
                    <div className="flex-grow">
                        <h1 className="text-4xl pb-2">500+</h1>
                        <p className="pb-2">
                            Board-certified <br/> doctors
                        </p>
                    </div>
                    <img src={i} alt="Icons depicting board-certified doctors" className="mt-auto" />
                </div>
            </div>
        </div>
    );
};

export default Graph;
