// import Hero from "../components/Hero";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer";

// const HomePage = () => (
//   <div>
//     <Hero />
//     <Features />
//     <Testimonials />
//     <ContactForm />
//     <Footer />
//   </div>
// );

// export default HomePage;

import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HomePage = () => (
  <div>
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0}
    >
      <Hero />
    </motion.div>
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={1}
    >
      <Features />
    </motion.div>
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={2}
    >
      <Testimonials />
    </motion.div>
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={3}
    >
      <ContactForm />
    </motion.div>
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={4}
    >
      <Footer />
    </motion.div>
  </div>
);

export default HomePage;
