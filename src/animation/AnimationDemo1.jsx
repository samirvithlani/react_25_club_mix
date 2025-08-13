import React from "react";
import { motion } from "motion/react";
export const AnimationDemo1 = () => {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };
  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ANIMATION DEMO 1</h1>
      <motion.div style={box} animate={{rotate:360}} transition={{duration:2}}>
      </motion.div>
       <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
        />
         <motion.h1
      initial={{ opacity: 0, y: 50 }} // start hidden & moved down
      animate={{ opacity: 1, y: 0 }} // fade in & move up
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      Hello, Framer Motion!
    </motion.h1>
    <motion.div
        initial={{ width: 0 }}
        animate={{ width: "00px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          height: "4px",
          background: "#ff4d4d",
          margin: "0 auto",
          borderRadius: "2px",
        }}
      />
    </div>
  );
};
