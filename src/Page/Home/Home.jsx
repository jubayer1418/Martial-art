import { motion, useScroll } from "framer-motion";
import { Helmet } from "react-helmet-async";
import About from "./About";
import BannerSlider from "./BannerSlider";
import Classes from "./Classes";
import Instructors from "./Instructors";
const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="z-20"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 10,

          background: "yellow",
          transformOrigin: "0%",
        }}
      ></motion.div>
      <Helmet>
        <title>Home | The Martial Art</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <About></About>
      <Classes></Classes>
      <Instructors></Instructors>
    </>
  );
};

export default Home;
