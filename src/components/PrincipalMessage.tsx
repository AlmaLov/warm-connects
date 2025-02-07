
import { motion } from "framer-motion";

const PrincipalMessage = () => {
  return (
    <section className="bg-cream py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl text-burgundy mb-12 text-center font-semibold">
            Message from the Principal
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="aspect-square rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="/lovable-uploads/f332db90-32f1-4dc2-8eaf-d78eb9326cd2.png"
                  alt="Portrait of Dr. Mahesh Prasad"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The true aim of education since time immemorial has been to enquire
                into the higher purpose of life, and to help humans ponder over two
                main questions - 'Who am I?' and 'What am I here for?'. From a
                child's early explorations into life, through play and years of
                formal education, humans eventually aspire to reach a state of
                being, that is described by seers as 'present moment awareness' or
                just 'to be' and is regarded as the highest form of learning.
              </p>
              <div className="text-gray-700">
                <p className="font-semibold">Dr. Mahesh Prasad</p>
                <p className="text-sm">Principal, Step by Step School</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
