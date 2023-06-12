import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const Welcome = () => {
  return (
    <div className="text-center">
      <Helmet>
        <title>YOUR DASHBOARD | The Martial Art</title>
      </Helmet>
      <motion.h1
        className="text-9xl uppercase text-transparent bg-clip-text font-bold bg-gradient-to-r from-cyan-500 to-blue-500 "
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 3, delay: 0.2 }}
      >
        <span>welcome</span> <br></br> to <br></br> <span>dashboard</span>
      </motion.h1>
    </div>
  );
};

export default Welcome;
