import { LuArrowUpRight } from "react-icons/lu";
import Img2 from '../assets/Media/Rectangle 32.png';

const Appointment = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to left, rgba(2, 0, 67, 0.3) 30%, rgba(2, 0, 67, 1) 100%), url(${Img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="bg-cover bg-center rounded-lg mt-5  p-10 md:p-8"
    >
      <div className="flex justify-end items-center">
        <img src="./logo light.png" alt="Logo" className="h-10 mr-4" />
      </div>
      <div className="flex flex-col items-start pb-5 pl-3 text-white">
        <h1 className="text-xl md:text-5xl font-bold leading-tight">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h1>
      
        <div className="mt-4">
          <button className="btn bg-yellow-400 text-white mr-2">Appointment</button>
          <button className="btn btn-outline text-white">Learn More <LuArrowUpRight/></button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
