

interface HeroProps {
  backgroundImage: string;
}

const Hero = ({ backgroundImage }: HeroProps) => {
  return (
    <div 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        width: "100%",
      }}
    >
      
    </div>
  );
};

export default Hero;
