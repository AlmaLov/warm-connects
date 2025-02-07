
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section className="bg-cream py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-burgundy mb-4 font-light">
            Glad to have you home
          </h2>
          <h3 className="text-5xl md:text-6xl text-burgundy mb-8 font-bold">
            SBS Alumni and Friends
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Step into the virtual home of SBS global community—a space where our
            school's spirit thrives beyond the classroom walls. Reconnect with
            classmates, discover opportunities, and stay up-to-date on the latest
            happenings.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We are thrilled to welcome you back and invite you to stay connected
            with your alma mater. We value your involvement and would love to hear
            from you. For any questions or ideas, please reach out to our alumni
            office at{" "}
            <a
              href="mailto:alumni@sbs-school.org"
              className="text-burgundy hover:text-burgundy-light transition-colors underline"
            >
              alumni@sbs-school.org
            </a>
            . Thank you for your continued support, and we look forward to staying
            connected.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
