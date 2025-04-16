"use client";

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <motion.img
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
        src="/logo_icon.png"
        alt="Loading..."
        width={80}
        height={80}
      />
    </div>
  );
} 