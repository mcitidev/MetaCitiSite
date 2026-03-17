"use client";

import { motion } from 'motion/react';
import { Zap, Shield, TrendingUp, Database } from 'lucide-react';
import dash1 from 'dash1.png';

const benefits = [
    {
        icon: Zap,
        title: 'Faster Response',
        description: 'Faster incident response and resource deployment',
    },
    {
        icon: Shield,
        title: 'Safer Streets',
        description: 'Safer, more reliable streets for all road users',
    },
    {
        icon: TrendingUp,
        title: 'Optimized Operations',
        description: 'Optimized transit operations and fleet management',
    },
    {
        icon: Database,
        title: 'Data-Driven Planning',
        description: 'Data-driven infrastructure planning and investment decisions',
    },
];

export function BenefitsSection() {
    return (
        <section id="benefits" className=" [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Arial,sans-serif] relative overflow-hidden bg-gradient-to-br from-[#f0f9ff] via-white to-[f0f9ff]">
            <div className="container mx-auto px-6 lg:px-12 py-15 relative z-10 bg-gradient-to-br from-[#f0f9ff] via-white to-[f0f9ff]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left max-w-3xl mb-16"
                >
                    <div className="inline-block px-8 py-4 text-2xl rounded-full bg-red-100 text-red-700 mb-6">
                        Impact
                    </div>
                    <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                        Transform Urban Mobility{' '}
                        <span className="text-red-600">with Intelligent Insights</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-0">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full p-8 rounded-2xl bg-gray-100 border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300">
                                <div className="w-12 h-12 2xl:h-16 2xl:w-16 rounded-xl bg-red-600/20 flex items-center justify-center mb-5 group-hover:bg-[#b62727] group-hover:scale-110 transition-all duration-300">
                                    <benefit.icon className="h-6 w-6 2xl:h-9 2xl:w-9 text-[#b62727] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl 2xl:text-2xl text-black-900 mb-3 font-medium">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed 2xl:text-xl 2xl:font-medium">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technology Highlights
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-3xl lg:text-4xl text-red-600 font-medium text-center mb-12">
                        Technology Highlights
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative p-8 lg:p-10 rounded-2xl bg-gray-100 border
                        border-red-100 hover:border-red-300 hover:shadow-xl hover:shadow-red-600/10 transition-all
                        duration-300">
                            <h4 className="text-2xl text-red-600 mb-4">Cooperative AI Perception (CAP)</h4>
                            <p className="text-black-700 leading-relaxed">
                                Multi-source data fusion from infrastructure cameras, vehicles, drones, and mobile
                                robots for comprehensive coverage of the urban environment.
                            </p>
                        </div>

                        <div className="relative p-8 lg:p-10 rounded-2xl bg-gray-100 border
                        border-red-100 hover:border-red-300 hover:shadow-xl hover:shadow-red-600/10 transition-all
                        duration-300">
                            <h4 className="text-2xl text-red-600 mb-4">Live Digital Twin</h4>
                            <p className="text-black-700 leading-relaxed">
                                Continuous localization and tracking of vehicles, pedestrians, and events across
                                the entire urban environment in real-time.
                            </p>
                        </div>

                        <div className="relative p-8 lg:p-10 rounded-2xl bg-gray-100 border
                        border-red-100 hover:border-red-300 hover:shadow-xl hover:shadow-red-600/10 transition-all
                        duration-300">
                            <h4 className="text-2xl text-red-600 mb-4">Predictive Intelligence</h4>
                            <p className="text-black-700 leading-relaxed">
                                Advanced analytics engine forecasting congestion, identifying incident-prone zones,
                                and revealing mobility trends before they impact operations.
                            </p>
                        </div>

                        <div className="relative p-8 lg:p-10 rounded-2xl bg-gray-100 border
                        border-red-100 hover:border-red-300 hover:shadow-xl hover:shadow-red-600/10 transition-all
                        duration-300">
                            <h4 className="text-2xl text-red-600 mb-4">Scalable Architecture</h4>
                            <p className="text-black-700 leading-relaxed">
                                Cloud-native platform processing video, sensor, IoT, and telematics data at city
                                scale with enterprise-grade reliability.
                            </p>
                        </div>
                    </div>
                </motion.div>*/}
            </div>
        </section>
    );
}
