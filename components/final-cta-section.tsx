"use client";

import { motion } from 'motion/react';
import {ArrowRight, CheckCircle2, Calendar, Play} from 'lucide-react';
import { Button } from './ui/button';
import { RequestDemoModal } from "./ReqDemoModal";
import React, {useState} from "react";
import {PlatformTourModal} from "@/components/PlatformTourModal";


export function FinalCtaSection() {
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  return (
      <>
      <section id="contact" className="
    py-15 lg:py-20
    bg-gradient-to-br
    from-[#0f172a] via-[#1e293b] to-[#334155]
    relative overflow-hidden
">        {/* Background pattern */}
        <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-5xl lg:text-6xl xl:text-7xl text-white mb-8 tracking-tight leading-tight">
              Ready to Transform Your City's Mobility?
            </h2>

            <p className="text-2xl lg:text-3xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto">
              See how MetaCiti can help you improve safety, optimize operations,
              and make data-driven decisions for your urban network.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                <span className="text-2xl">Free consultation</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                <span className="text-2xl">Custom demo</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                <span className="text-2xl">No commitment</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button
                  size="xl"
                  onClick={() => setOpen(true)}
                  className="bg-white hover:bg-gray-50 text-red-600 hover:text-white hover:border hover:border-white hover:border-2 px-12 shadow-2xl group text-lg h-16 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                  size="xl"
                  variant="outline"
                  onClick={() => setTourOpen(true)}
                  className="border-2 border-white text-red-600 hover:bg-white/10 px-12 text-lg h-16 transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-0 h-5 w-5" />
                Watch Platform Tour
              </Button>
            </div>

            {/*<motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-20 pt-16 border-t border-white/20"
              >
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-5xl lg:text-6xl text-white mb-3">3</div>
                  <div className="text-white/80 text-lg">Countries Deployed</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl text-white mb-3">1M+</div>
                  <div className="text-white/80 text-lg">Daily Detections</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl text-white mb-3">90%</div>
                  <div className="text-white/80 text-lg">Accuracy Rate</div>
                </div>
              </div>
            </motion.div>*/}
          </motion.div>
        </div>
      </section>
  <RequestDemoModal open={open} onClose={() => setOpen(false)} />
        <PlatformTourModal open={tourOpen} onClose={() => setTourOpen(false)}/>
  </>
  );
}