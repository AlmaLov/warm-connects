
import { Button } from "./ui/button";

const MapSection = () => {
  const markers = [
    { value: 484, top: "30%", left: "60%", size: "large" },
    { value: 245, top: "45%", left: "55%", size: "medium" },
    { value: 138, top: "40%", left: "75%", size: "small" },
    { value: 115, top: "65%", left: "58%", size: "small" },
    { value: 44, top: "50%", left: "65%", size: "x-small" },
    { value: 29, top: "60%", left: "62%", size: "x-small" },
    { value: 16, top: "35%", left: "70%", size: "x-small" },
    { value: 12, top: "40%", left: "63%", size: "x-small" },
    { value: 12, top: "55%", left: "60%", size: "x-small" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Map with fixed height and no max-height */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url('/lovable-uploads/18471359-e2d2-459b-b77b-59450aff20ac.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100%'
        }}
      />

      {/* Overlay gradient with reduced opacity */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)'
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

      {/* Map Markers */}
      {markers.map((marker, index) => {
        const sizeClasses = {
          'large': 'w-32 h-32 text-3xl',
          'medium': 'w-24 h-24 text-2xl',
          'small': 'w-20 h-20 text-xl',
          'x-small': 'w-16 h-16 text-base'
        }[marker.size];

        const bgColor = marker.size === 'x-small' ? 'bg-white text-[#C93329]' : 'bg-[#C93329] text-white';

        return (
          <div
            key={index}
            className={`absolute ${sizeClasses} ${bgColor} rounded-full flex items-center justify-center font-bold shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110`}
            style={{
              top: marker.top,
              left: marker.left
            }}
          >
            {marker.value}
          </div>
        );
      })}
    </section>
  );
};

export default MapSection;
