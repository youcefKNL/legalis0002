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

// Transition.js
// Transition.js
// Transition.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const usePageTransition = () => {
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    // Désactiver le rendu initial après le montage initial
    setInitialRender(false);
  }, []);

  const shouldPlayKeyframes = initialRender;

  const pageVariants = {
    initial: shouldPlayKeyframes
      ? {
          opacity: 0,
          transform: "translateY(100%)",
        }
      : {
          opacity: 1,
          transform: "translateY(0)",
          transition: "0.3s ease",
        },
    animate: {
      opacity: 1,
      transform: "translateY(0)",
      transition: "0.3s ease",
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
      transform: "translateY(-100%)",
    },
  };

  return pageVariants;
};

const Transition = ({ children }) => {
  const pageVariants = usePageTransition();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
