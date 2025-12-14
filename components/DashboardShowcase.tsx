"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const dashboards = [
  {
    id: 1,
    title: "Analytics Dashboard",
    image: "dash1.png",
    metrics: { value: "98.7%", label: "Accuracy" }
  },
  {
    id: 2,
    title: "Smart City Monitoring",
    image: "dashScreen.png",
    metrics: { value: "45K+", label: "Active Sensors" }
  },
  {
    id: 3,
    title: "Data Visualization",
    image: "dashmap.png",
    metrics: { value: "Real-time", label: "Processing" }
  }
];

export function DashboardShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dashboards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-10">
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 -m-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0091AD]/30 to-[#1780A1]/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#B7094C]/20 to-[#A01A58]/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#723C70]/10 to-[#0091AD]/10 rounded-full blur-3xl opacity-30" />
      </div>

        {/* Metric Card */}
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            className="
    absolute -top-10  left-0
    px-10 py-3
    rounded-full
    backdrop-blur-xl
    bg-gradient-to-br from-red-50 to-white border border-red-100
    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
  "
        >
            <div className="text-slate-900 font-semibold text-lg">
                {dashboards[currentIndex].metrics.value}

              <span className="text-sm font-medium pl-3">{dashboards[currentIndex].metrics.label}</span>
            </div>
        </motion.div>

      {/* Main Dashboard Display */}
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.6 }}
              className="relative"
          >
            <ImageWithFallback
                src={dashboards[currentIndex].image}
                alt={dashboards[currentIndex].title}
                className="w-full h-auto rounded-2xl"
            />

            {/* Remove overlay if you want the raw image */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
          </motion.div>
        </AnimatePresence>
        </div>
      </div>


      {/* Thumbnail Segments */}
      <div className="flex gap-3 mt-6">
        {dashboards.map((dashboard, index) => (
          <button
            key={dashboard.id}
            onClick={() => setCurrentIndex(index)}
            className={`flex-1 relative aspect-video rounded-lg overflow-hidden transition-all ${
              index === currentIndex 
                ? 'ring-2 ring-[#B7094C] ring-offset-2 scale-105' 
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <ImageWithFallback
              src={dashboard.image}
              alt={dashboard.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-2 left-2 text-white text-xs">
              {dashboard.title}
            </div>
          </button>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="flex gap-2 mt-4 justify-center">
        {dashboards.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-8 bg-gradient-to-r from-[#B7094C] to-[#A01A58]' 
                : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}