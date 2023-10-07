// import { motion } from "framer-motion";
// //variants
// const transitionVariants = {
//   initial: {
//     x: "100%",
//     width: "100%",
//   },
//   animate: {
//     x: "0%",
//     width: "0%",
//   },
//   exit: {
//     x: ["0%", "100%", "0%"], // L'élément va vers la droite, revient vers la gauche, puis sort
//     width: ["0%", "100%", "0%"], // La largeur suit le même principe
//   },
// };

// const Transition = () => {
//   return (
//     // <motion.div
//     //   className="transition"
//     //   variants={transitionVariants}
//     //   initial="initial"
//     //   animate="animate"
//     //   exit="exit"
//     //   transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
//     // ></motion.div>
//     <motion.div
//       // className="transition"
//       initial={{
//         borderRadius: "50%",
//         width: 0,
//         height: 0,
//         top: 0,
//         left: 0,
//         background: "#3498db",
//       }}
//       animate={{
//         width: "100vw",
//         height: "100vh",
//         borderRadius: 0,
//         top: 0,
//         left: 0,
//         background: "#3498db",
//       }}
//       exit={{
//         borderRadius: "50%",
//         width: "100vw",
//         height: "100vh",
//         top: 0,
//         left: 0,
//         background: "#3498db",
//       }}
//       transition={{ type: "spring", stiffness: 50, damping: 10 }}
//     />
//   );
// };

// export default Transition;

import { motion } from "framer-motion";
import { useState } from "react";

// Fonction pour générer des couleurs aléatoires en format hexadécimal
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Transition = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    if (onComplete && typeof onComplete === "function") {
      onComplete(); // Call the provided callback function if it exists
    }
  };

  const variantsTransition = {
    initial: {
      borderRadius: "0",
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      background: `linear-gradient(45deg, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`,
    },
    animate: {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      top: 0,
      left: 0,
      background: `linear-gradient(45deg, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
    exit: {
      borderRadius: "0",
      width: "0vw",
      height: "0vh",
      top: 0,
      left: 0,
      background: `linear-gradient(45deg, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`,
    },
    display: "none",
    opacity: 0,
  };

  return (
    <motion.div
      className="transition"
      variants={variantsTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, delay: 0, ease: "easeInOut" }}
      onAnimationComplete={handleAnimationComplete}
    />
  );
};

export default Transition;
