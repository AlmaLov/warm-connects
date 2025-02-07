
import { motion } from "framer-motion";

const ImageGrid = () => {
  return (
    <section className="relative" style={{ top: "1578px" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src="/lovable-uploads/3ccd8266-39d6-4245-afa5-37125563aca7.png"
              alt="Student learning experience"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src="/lovable-uploads/bcb7c699-7ee5-432a-93c4-d485974d8b54.png"
              alt="Student activities"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src="/lovable-uploads/3ccd8266-39d6-4245-afa5-37125563aca7.png"
              alt="Academic excellence"
              className="w-full h-full object-cover object-right"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src="/lovable-uploads/bcb7c699-7ee5-432a-93c4-d485974d8b54.png"
              alt="School life"
              className="w-full h-full object-cover object-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
