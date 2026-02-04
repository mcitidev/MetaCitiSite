"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { X, Video } from "lucide-react";

interface PlatformTourModalProps {
    open: boolean;
    onClose: () => void;
}

export function PlatformTourModal({ open, onClose }: PlatformTourModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-full max-w-lg rounded-2xl bg-[#0b0f1a] p-10 text-center shadow-2xl border border-white/10"
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white/60 hover:text-white transition"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                        <Video className="h-8 w-8 text-white" />
                    </div>
                </div>

                <h3 className="text-3xl font-semibold text-white mb-4">
                    Platform Tour Coming Soon
                </h3>

                <Button
                    onClick={onClose}
                    className="px-10 h-12 text-lg"
                >
                    Got it
                </Button>
            </motion.div>
        </div>
    );
}
