
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/3ccd8266-39d6-4245-afa5-37125563aca7.png")',
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl text-white font-light mb-2 animate-fade-in">
            Welcome to
          </h2>
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-8 animate-fade-in">
            SBSAlum
          </h1>
          <p className="text-xl text-white/90 max-w-xl animate-fade-in">
            Where memories meet the future, and every alumnus story adds to our
            legacy.
          </p>
        </motion.div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto fill-cream transform translate-y-1"
        >
          <path d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
