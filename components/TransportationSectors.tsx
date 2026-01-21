"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    TrafficCone,
    Bus,
    BusFront,
    CheckCircle,
} from "lucide-react";

type SectorKey =
    | "all"
    | "operations"
    | "transit"
    | "parking"
    | "highways"
    | "workzones"
    | "safety"
    | "smartcity"
    | "integrators";

const pills: { key: SectorKey; label: string }[] = [
    { key: "all", label: "All Sectors" },
    { key: "operations", label: "Traffic Operations" },
    { key: "transit", label: "Transit & Mobility" },
    { key: "parking", label: "Parking & Curbside" },
    { key: "highways", label: "Highways & Corridors" },
    { key: "workzones", label: "Work Zones & Construction" },
    { key: "safety", label: "Transportation Safety (Vision Zero)" },
    { key: "smartcity", label: "Smart City / ITS" },
    { key: "integrators", label: "System Integrators" },
];

const cards = [
    {
        category: "operations" as SectorKey,
        icon: TrafficCone,
        title: "Traffic Operations",
        description:
            "Optimize signal timing, reduce congestion, and improve traffic flow with real-time analytics.",
        benefits: [
            "Real-time signal optimization",
            "Congestion detection and alerts",
            "Adaptive traffic control systems",
        ],
    },
    {
        category: "transit" as SectorKey,
        icon: Bus,
        title: "Transit & Mobility",
        description:
            "Enhance public transportation efficiency and multi-modal mobility with integrated real-time data.",
        benefits: [
            "Real-time transit tracking",
            "Multi-modal integration",
            "Passenger information systems",
        ],
    },
    {
        category: "highways" as SectorKey,
        icon: BusFront,
        title: "Highways & Corridors",
        description:
            "Monitor and manage highway networks with corridor-wide digital twins and predictive analytics.",
        benefits: [
            "Corridor performance monitoring",
            "Incident detection and management",
            "Travel time prediction",
        ],
    },
];

export function TransportationSectors() {
    const [active, setActive] = useState<SectorKey>("all");

    return (
        <section id="sectors" className="py-30 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-block px-6 py-2 rounded-full bg-red-100 text-red-700 font-medium mb-6">
                        Existing Deployments
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                        Real-time operational decision support for{" "}
                        <span className="text-red-600">transportation networks</span>
                    </h2>

                    <p className="text-xl text-gray-600">
                        Supporting transportation agencies and system integrators with live
                        digital twin operational views, real-time monitoring, and incident
                        detection.
                    </p>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {pills.map((pill) => (
                        <button
                            key={pill.key}
                            onClick={() => setActive(pill.key)}
                            className={`
                                px-5 py-2 rounded-full font-medium text-sm transition-all
                                border shadow-sm
                                ${
                                active === pill.key
                                    ? "bg-red-600 text-white border-red-600"
                                    : "bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:-translate-y-0.5"
                            }
                            `}
                        >
                            {pill.label}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards
                        .filter((c) => active === "all" || c.category === active)
                        .map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                                    <card.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {card.title}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {card.description}
                                </p>

                                <ul className="space-y-2">
                                    {card.benefits.map((b) => (
                                        <li key={b} className="flex items-center text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-20 pt-12 border-t border-gray-200">
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                        Ready to transform your transportation network with real-time digital
                        twin technology?
                    </p>

                    <a
                        href="#contact"
                        className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                    >
                        Schedule a Demo
                    </a>
                </div>
            </div>
        </section>
    );
}
