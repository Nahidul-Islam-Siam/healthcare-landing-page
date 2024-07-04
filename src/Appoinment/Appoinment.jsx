import { LuArrowUpRight } from "react-icons/lu";
import Img2 from '../assets/Media/Rectangle 32.png';

const Appointment = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-50 rounded-lg mt-5 p-4 md:p-8"
    >
      <div className="flex justify-end items-center">
        <img src="./logo light.png" alt="Logo" className="h-10 mr-4" />
      </div>
      <div className="flex flex-col items-start text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h1>
        <p className="text-lg md:text-2xl mt-2">Your secondary text goes here.</p>
        <div className="mt-4">
          <button className="btn bg-yellow-400 text-white mr-2">Appointment</button>
          <button className="btn btn-outline text-white">Learn More <LuArrowUpRight/></button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
