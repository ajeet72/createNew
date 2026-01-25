import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  hidden: (direction: "left" | "right" | "bottom") => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "bottom" ? 100 : 0,
  }),

  visible: () => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.8,
    },
  }),
};
