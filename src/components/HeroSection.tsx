
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
          <h2 
            className="text-white mb-2 animate-fade-in"
            style={{
              fontFamily: 'Sun Valley - Demo',
              fontSize: '64px',
              fontWeight: '400',
              lineHeight: '56px',
              textAlign: 'center',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
              position: 'relative',
              left: '79px',
              top: '469px'
            }}
          >
            Welcome to
          </h2>
          <h1 
            className="text-white mb-8 animate-fade-in"
            style={{
              fontSize: '96px',
              fontWeight: '700',
              lineHeight: '84px',
              letterSpacing: '-2px',
              textAlign: 'left',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none'
            }}
          >
            SBSAlum
          </h1>
        </motion.div>
      </div>

      {/* Straight bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-cream" />
    </section>
  );
};

export default HeroSection;
