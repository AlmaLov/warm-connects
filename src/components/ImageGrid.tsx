
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Students in classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "Alumni event",
  },
  {
    src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    alt: "Campus life",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Student activities",
  },
];

const ImageGrid = () => {
  return (
    <section className="py-16 relative z-10">
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
