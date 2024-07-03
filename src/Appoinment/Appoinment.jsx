import { LuArrowUpRight } from "react-icons/lu";
import Img2 from '../assets/Media/Rectangle 32.png';

const Appointment = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

      }}
      className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-50"
    >
      <div className="flex justify-end items-center  p-4">
        <img src="./logo light.png" alt="Logo" className="h-10 mr-4" />

      </div>
      <div className="flex flex-grow items-center p-8  ">
        <div className="flex flex-col items-start text-white">
          <h1 className="text-5xl font-bold">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h1>
          <p className="text-2xl mt-2">Your secondary text goes here.</p>
          <div className="mt-4">
            <button className="btn bg-[#FFC637] mr-2">Appointment</button>
            <button className="btn btn-outline">Learn More <LuArrowUpRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
