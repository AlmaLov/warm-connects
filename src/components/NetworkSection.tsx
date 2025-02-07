
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const profileImages = Array(7).fill("/placeholder.svg");

const NetworkSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex justify-center -space-x-4 mb-8">
            {profileImages.map((src, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
              >
                <img src={src} alt={`Profile ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-gray-600 text-sm">
              +99
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl text-gray-800 text-center mb-8 font-semibold">
            Search and Network with alums across programs and batches
          </h2>
          <div className="text-center">
            <Button className="bg-burgundy hover:bg-burgundy-light text-white transition-colors duration-300 px-8 py-6 text-lg">
              Login/Signup
            </Button>
            <p className="mt-6 text-gray-500 text-sm">Powered by AlmaConnect</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkSection;
