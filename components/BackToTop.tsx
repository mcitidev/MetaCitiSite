"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";



export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300); // show after scrolling
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.button
            initial={{opacity: 0, y: 20}}
            animate={{opacity: visible ? 1 : 0, y: visible ? 0 : 20}}
            transition={{duration: 0.3}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            onClick={scrollToTop}
            style={{pointerEvents: visible ? "auto" : "none"}}
            className="fixed bottom-6 right-6 z-50
    w-12 h-12 rounded-full
    bg-gradient-to-r from-[#B7094C] to-[#A01A58] text-white
    shadow-lg
    hover:from-[#A01A58] hover:to-[#7A123E]
    transition-all duration-300
    flex items-center justify-center"
        >
            <ArrowUp size={20}/>
        </motion.button>
    );
}