
import { motion } from "framer-motion";

const images = [
  {
    src: "/lovable-uploads/bcb7c699-7ee5-432a-93c4-d485974d8b54.png",
    alt: "Student learning experience",
  },
  {
    src: "/lovable-uploads/3ccd8266-39d6-4245-afa5-37125563aca7.png",
    alt: "Students collaborating",
  },
  {
    src: "/lovable-uploads/bcb7c699-7ee5-432a-93c4-d485974d8b54.png",
    alt: "Campus activities",
  },
  {
    src: "/lovable-uploads/3ccd8266-39d6-4245-afa5-37125563aca7.png",
    alt: "Student engagement",
  },
];

const ImageGrid = () => {
  return (
    <section className="py-16 relative z-10" style={{ marginTop: "1578px" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-burgundy/20 hover:bg-burgundy/30 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
