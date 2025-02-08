
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
      {/* Background Map with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/lovable-uploads/9d26d9b6-7835-4b76-ab35-16f96ef710ec.png')`
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            SBS Alumni on Global Map
          </h2>
          <p className="text-lg md:text-xl text-white mb-8 font-light">
            Connect with your alumni today!
          </p>
          <Button 
            className="bg-[#C93329] hover:bg-[#A62822] text-white font-bold px-8 py-6"
          >
            Sign in now
          </Button>
        </div>
      </div>

      {/* Map Markers */}
      {markers.map((marker, index) => {
        const sizeClasses = {
          'large': 'w-24 h-24 text-2xl',
          'medium': 'w-20 h-20 text-xl',
          'small': 'w-16 h-16 text-lg',
          'x-small': 'w-12 h-12 text-base'
        }[marker.size];

        return (
          <div
            key={index}
            className={`absolute ${sizeClasses} bg-[#C93329] rounded-full flex items-center justify-center text-white font-bold shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110`}
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
