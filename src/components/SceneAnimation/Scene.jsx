import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Scene = ({ src, title, description }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const boxVariant = {
    visible: {
      opacity: 1,
      transition: {
        opacity: { duration: 1, ease: "easeOut", delay: 0.5 },
      },
    },
    hidden: { opacity: 0 },
  };

  const overlayVariant = {
    visible: {
      left: "50%",
      transition: {
        left: { duration: 1, ease: "easeOut", delay: 0.5 },
      },
    },
    hidden: { left: "-100%" },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="coral-scene"
    >
      <img src={src} alt="corals" />
      <motion.div
        variants={overlayVariant}
        initial="hidden"
        animate={control}
        className="overlay"
      >
        <h4>{title}</h4>
        <p>{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Scene;
