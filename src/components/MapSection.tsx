
import { Button } from "./ui/button";

const MapSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Map */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url('/lovable-uploads/f66464ab-4d30-4e24-b672-9a3ec61f1db4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh'
        }}
      />

      {/* Overlay gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-xl">
          <h2 className="text-5xl font-serif font-bold text-white mb-4 leading-tight">
            SBS Alumni on Global Map
          </h2>
          <p className="text-xl text-white mb-8 font-light">
            Connect with your alumni today!
          </p>
          <Button 
            className="bg-[#C93329] hover:bg-[#A62822] text-white font-medium px-8 py-3 text-lg rounded-md"
          >
            Sign in now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
