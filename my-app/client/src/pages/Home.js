import React, { useState } from "react";
import { render } from "react-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

function Home() {
    const control = useAnimation();
  const [ref, inView] = useInView();

  
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
    className="box"
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    >
      <h1 className="text-white text-center">Welcome To KiddoCare</h1>
    </motion.div>
  );
}

export default Home;
