"use client";

import { motion } from "motion/react";
import {
    AlertTriangle,
    UserX,
    Truck,
    BarChart3,
    Map,
    Search,
    Layers,
    Target,
    Repeat1,
    CarFront,
    Zap
} from "lucide-react";
import {useEffect, useState} from "react";

const capabilities = [
   /* { icon: Layers, title: "Platform Integration", description: "Integration with VMS, control rooms, and IoT platforms" },
    { icon: AlertTriangle, title: "Incident Detection", description: "Stalled vehicles, debris, and wrong-way driving alerts" },
    { icon: UserX, title: "Unsafe Driving Detection", description: "Real-time identification of dangerous driving behaviors" },
    { icon: Truck, title: "Multi-Modal Monitoring", description: "Track cars, trucks, buses, and pedestrian movement" },
    { icon: BarChart3, title: "Traffic Analytics", description: "Congestion, flow, density, and volume analytics" },
    { icon: Map, title: "Activity Heatmaps", description: "Visual heatmaps of traffic activity and safety events" },
    { icon: Search, title: "Visual Search", description: "Search and review historical video and event data" },
    { icon: Layers, title: "Platform Integration", description: "Integration with VMS, control rooms, and IoT platforms" },*/

    /*Need to revise below icons so that they match as much as possible*/

    { icon: CarFront, title: "Stalled Vehicles", description: "Instant detection of stopped or disabled vehicles" },
    { icon: AlertTriangle, title: "Debris Alerts", description: "Real-time identification of obstacles on the roadway" },
    { icon: UserX, title: "Wrong-Way Driving", description: "Immediate alerts for dangerous counter-flow movement" },
    { icon: Truck, title: "Flow Analytics", description: "Live insights into traffic speed, volume, and density" },
    { icon: BarChart3, title: "Congestion Maps", description: "Clear visualization of bottlenecks across the network" },
    { icon: Zap, title: "Movement Tracking", description: "Multi-modal tracking of vehicles, pedestrians, and cyclists" },
    { icon: Target, title: "Heatmaps", description: "Activity heatmaps showing high-traffic zones at a glance" },
    { icon: Repeat1, title: "Event Replay", description: "Timestamped video playback for incident reconstruction" },
    { icon: Layers, title: "VMS Integration", description: "Direct connection to roadside signs for automated messaging" },

];


function useIsTouchDevice() {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
        setIsTouch(mq.matches);
    }, []);

    return isTouch;
}

const handleTouchPlay = (e: React.TouchEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;

    e.preventDefault();

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

const handleTapToggle = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

function usePrimeVideos() {
    useEffect(() => {
        const videos = document.querySelectorAll<HTMLVideoElement>("video");

        videos.forEach(video => {
            video.muted = true;
            video.playsInline = true;

            // Prime Safari
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        video.pause();
                        video.currentTime = 0;
                    })
                    .catch(() => {
                        // Safari may block — that's fine
                    });
            }
        });
    }, []);
}



export function CapabilitiesSection() {
    const isTouch = useIsTouchDevice();
    usePrimeVideos();
    return (
        <section
            id="capabilities"
            className="capabilities-section py-3 lg:py-15 bg-gradient-to-br from-[#f0f9ff] via-white to-[#f0f9ff] relative overflow-hidden"
        >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 -z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40 -z-0" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left max-w-3xl  mb-16"
                >
                    <div className="inline-block px-8 py-4 text-2xl rounded-full bg-red-100 text-red-700 mb-6">
                        Capabilities
                    </div>

                    <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                         Automated Incident Detection &{" "}
                        <span className="text-red-600">Analytics</span>
                    </h2>

                    <p className="text-2xl text-gray-600">
                        From incident detection to predictive analytics,
                        MetaCiti delivers the intelligence you need to manage urban mobility.
                    </p>
                </motion.div>

                {/* Mobile-only tap hint */}
                <div className="md:hidden mb-3 text-sm text-gray-500 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-400" />
                    Tap video to play
                </div>


                {/* Small image row */}
                <div className="cap-videos flex items-start gap-6 mb-8 mr-25">


                    {/* Video 1 */}
                    <div className="cap-video basis-[35%] shrink-0 rounded-xl overflow-hidden relative">
                        <video
                            src="otto1.webm"
                            muted
                            playsInline
                            preload="metadata"
                            poster="/posters/otto1.png"

                            onMouseEnter={(e) => {
                                if (!isTouch) e.currentTarget.play();
                            }}

                            onMouseLeave={(e) => {
                                if (!isTouch) e.currentTarget.pause(); // no reset
                            }}

                            onClick={(e) => {
                                if (!isTouch) return;

                                const video = e.currentTarget;
                                if (video.paused) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }}

                            className="w-full h-full rounded-xl object-cover cursor-pointer"
                        />

                    </div>


                    {/* Video 2 */}
                    <div className="cap-video basis-[35%] shrink-0 rounded-xl overflow-hidden relative">
                        <video
                            src="otto2.webm"
                            muted
                            playsInline
                            preload="metadata"
                            poster="/posters/otto1.png"

                            onMouseEnter={(e) => {
                                if (!isTouch) e.currentTarget.play();
                            }}

                            onMouseLeave={(e) => {
                                if (!isTouch) e.currentTarget.pause(); // no reset
                            }}

                            onClick={(e) => {
                                if (!isTouch) return;

                                const video = e.currentTarget;
                                if (video.paused) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }}

                            className="w-full h-full rounded-xl object-cover cursor-pointer"
                        />

                    </div>


                    {/* Video 3 */}
                    <div className="cap-video basis-[35%] shrink-0 rounded-xl overflow-hidden relative">
                        <video
                            src="otto23.webm"
                            muted
                            playsInline
                            preload="metadata"
                            poster="/posters/otto1.png"

                            onMouseEnter={(e) => {
                                if (!isTouch) e.currentTarget.play();
                            }}

                            onMouseLeave={(e) => {
                                if (!isTouch) e.currentTarget.pause(); // no reset
                            }}

                            onClick={(e) => {
                                if (!isTouch) return;

                                const video = e.currentTarget;
                                if (video.paused) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }}

                            className="w-full h-full rounded-xl object-cover cursor-pointer"
                        />

                    </div>


                </div>


                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 lg:gap-x-8 lg:gap-y-2">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={capability.title}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group cursor-pointer"
                        >
                            <div
                                className="
                    relative h-[95%] p-8 rounded-2xl
                    bg-gray-100 border border-gray-100 hover:border-red-300
                    hover:shadow-xl hover:shadow-[#b8d4e3]/50 transition-all duration-300
                    hover:-translate-y-2
                "
                            >

                                {/* gradient wash */}
                                <div
                                    className="
                        absolute inset-0 pointer-events-none
                        bg-gradient-to-br from-red-50 to-white border border-red-100
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        rounded-2xl
                    "
                                />

                                {/* === ICON + TITLE ROW === */}
                                <div className="flex items-center gap-4 mb-5 relative z-10">

                                    {/* Icon bubble */}
                                    <div
                                        className="
                            w-15 h-15 rounded-xl
                            bg-gradient-to-br from-red-600/20 to-red-600/10
                            text-red-600
                            flex items-center justify-center
                            group-hover:bg-[#B62727] group-hover:scale-110 group-hover:text-white
                            transition-all duration-300
                        "
                                    >
                                        <capability.icon className="h-10 w-10" />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="
                            text-xl 2xl:text-2xl font-semibold
                            text-red-600
                            transition-colors duration-300
                            group-hover:text-red-600
                        "
                                    >
                                        {capability.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="2xl:text-xl text-gray-600 font-medium leading-relaxed relative z-10">
                                    {capability.description}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
