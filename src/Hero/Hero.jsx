import heroImg from '../assets/Media/Rectangle 5.png';

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded-xl pt-16"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
      </div>
    </div>
  );
};

export default Hero;
