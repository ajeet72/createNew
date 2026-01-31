"use client";

import React from "react";
import { Check, TrendingUp, Activity, Zap } from "lucide-react";
import CenterButton from "./centerButton";
import { motion } from "framer-motion";
import { cardVariants } from "@/utils/motionConfig";

const benefits = [
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "Cost Efficiency",
    description:
      "Save both time and budget with complete editing, thumbnail design, and map animations — all in one place.",
  },
  {
    icon: <Check className="w-6 h-6 text-white" />,
    title: "Better Results",
    description:
      "Engaging edits, eye-catching thumbnails, and high-quality map animations that boost CTR, watch time, and audience trust.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Unique Map Design",
    description:
      "Professional, custom map visuals and animations that make your content stand out from the crowd.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Increased Productivity",
    description:
      "Focus only on content creation — we’ll handle the editing, design, and rendering to deliver uploadready videos.",
  },
];

export default function BenefitsSection({ id }: { id: string }) {
  return (
    <section id="benefits" className="text-white px-6">
      <CenterButton name="Benefits" />
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Maximize efficiency and impact
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover the key benefits of partnering with us for your motion graphics work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="relative p-6 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden bg-[#032426]"
              custom="bottom"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
            <div className="absolute -right-[5px] -top-[5px] h-[120px] w-[120px] bg-[#053c3e] rounded-[231px] blur-[40px] z-[1]" />
              <div className="relative z-[2]">
                <div className="mb-4 bg-[#051f20] p-2 rounded-md inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#fdba80]">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
