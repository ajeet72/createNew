"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection({ id }: { id: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 2000); // Toggle every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id={id}
      className="min-h-fit mclaren-font text-white flex flex-col items-center justify-center pt-44 text-center px-4 sm:px-6 lg:px-8"
    >
      {/* Avatar + Tagline */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
        <div className="relative mb-8 avatar-glow">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/Arrow.png"
              alt="arrow"
              className="hidden lg:block absolute -top-20 left-48 transform -translate-x-1/2"
            />
          </motion.div>
          <div className="flex justify-center relative w-70 h-70">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src="/background.jpeg"
                alt="Background"
                className="w-full h-full rounded-full"
                style={{ zIndex: 1 }}
              />
              <motion.img
                src="/CN LOGO.png"
                alt="Javed Akhtar"
                className="rounded-full absolute inset-0 w-full h-full mt-3"
                initial={{ y: 80, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 25 }}
                style={{ zIndex: 2 }}
              />
            </div>
            <div
              className="absolute inset-0 w-full h-full rounded-full border-4 pointer-events-none"
              style={{ zIndex: 3 }}
            />
          </div>
          <motion.div
            className="absolute -top-14 lg:left-90 left-1/2 transform -translate-x-1/2 text-base sm:text-lg md:text-xl font-bold text-gray-300 whitespace-nowrap"
            animate={{
              y: [0, -10, 0], // smooth vertical bounce
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            Hello! We are <span className="text-[#fdba80]">Create new</span>
          </motion.div>
        </div>

        {/* Slogan */}
        <motion.div
          className="text-2xl sm:text-3xl text-center lg:text-left leading-snug mb-2 pt-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <span className="text-4xl sm:text-5xl font-bold">
            We’re Motion Graphics Artists <br/> shaping stories through motion.
            <span className="relative inline-block">
              <span className="text-purple-400 z-10 relative"></span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 opacity-50 rounded-full blur-sm"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
            ...
          </span>
        </motion.div>
      </div>

      {/* Title */}
      <motion.div
        className="text-center lg:text-left w-full max-w-4xl px-10 pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          A{" "}
          <motion.span
            className="text-[#fdba80]"
            animate={{
              textShadow: [
                "0 0 8px rgba(168, 85, 247, 0)",
                "0 0 8px rgba(168, 85, 247, 0.5)",
                "0 0 8px rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Creative duo
          </motion.span>
        </h1>

        <motion.p
          className="max-w-2xl text-lg sm:text-xl text-gray-300 py-4 mx-auto lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          We’re Create New — a two-person creative team creating maps, real estate visuals, and explainer videos for YouTube.We make pixels move to turn complex information into visuals that are easy to understand and hard to ignore. From storytelling to motion, every frame is designed to add clarity and impact.
        </motion.p>
      </motion.div>
    </div>
  );
}
