"use client";

import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { DashboardShowcase } from "./DashboardShowcase";
import { Navbar } from "@/components/navbar";
import { RequestDemoModal } from "./ReqDemoModal";
import React, {useState} from "react";
import {PlatformTourModal} from "@/components/PlatformTourModal";


export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  return (
      <>
      <section id = "home" className="
              hero-section
              min-h-[90vh]
              lg:min-h-screen
              2xl:min-h-[95vh]
              pt-24
              lg:pt-28
              2xl:pt-48
              pb-20
              lg:pb-24
              px-6
              lg:px-8
              bg-white
              relative
              overflow-hidden
            ">

        {/* NAVBAR */}
        <div
            className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"/>


        {/* Flowing Wave Elements - Inspired by the dark hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large flowing wave swoosh */}
          <svg
              className="absolute bottom-12 left-0 w-full h-auto"
              viewBox="0 0 1440 600"
              preserveAspectRatio="none"
              style={{transform: 'translateY(20%)'}}
          >
            {/* Background wave layer */}
            <path
                d="M0,400 Q360,300 720,350 T1440,400 L1440,600 L0,600 Z"
                fill="#dbeafe"
                opacity="0.6"
            />
            {/* Mid wave layer */}
            <path
                d="M0,420 Q360,320 720,370 T1440,420 L1440,600 L0,600 Z"
                fill="#bfdbfe"
                opacity="0.7"
            />
            {/* Front wave layer */}
            <path
                d="M0,450 Q360,350 720,400 T1440,450 L1440,600 L0,600 Z"
                fill="#93c5fd"
                opacity="0.5"
            />
          </svg>

          {/* Diagonal accent swoosh from top right */}
          <svg
              className="absolute top-0 right-0 w-2/3 h-full opacity-30"
              viewBox="0 0 800 800"
              preserveAspectRatio="none"
          >
            <path
                d="M800,0 Q600,200 400,300 T0,500 L0,0 L800,0 Z"
                fill="url(#gradient1)"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Subtle radial gradients for depth */}
          <div
              className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-radial from-[#60a5fa]/20 to-transparent rounded-full blur-3xl"/>
          <div
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-radial from-[#3b82f6]/15 to-transparent rounded-full blur-3xl"/>

          {/* Accent red glow for brand color */}
          <div
              className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-radial from-[#dc2626]/10 to-transparent rounded-full blur-3xl"/>
        </div>

        <div className="max-w-7xl xl:max-w-[80rem] 2xl:max-w-[88rem] mx-auto relative z-10">

          <div className="grid lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20 items-center">


            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full border border-red-200">
                <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"/>
                <span className="text-red-700 text-lg font-medium">
                Turn Cameras into Instant Intelligence for Urban Mobility
              </span>
              </div>

              <div className="space-y-6">
                <h1 className="
  font-space-grotesk
  font-extrabold
  tracking-tight
  leading-[1.05]
  text-5xl
  xl:text-6xl
  2xl:text-7xl
  text-black
">
                  MetaCiti
                  <span className="block text-gray-900">
    AI Platform for Urban Mobility
  </span>
                </h1>
                <p className="text-black max-w-xl text-lg lg:text-xl">
                  MetaCiti AI transforms city and highway cameras into a live digital map enabling safety alerts,
                  continuous localization,
                  automated incident detection, live congestion mapping, and mobility analytics. All events, alerts,
                  analytics, and flow patterns are provided through an Operator Dashboard.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    onClick={() => setDemoOpen(true)}
                    size="lg"
                    className="px-5 py-2 rounded-md bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md transition"
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setTourOpen(true)}
                    className="group border-[#455E89] hover:bg-[#455E89]/10 text-[#455E89] hover:text-red-600"
                >
                  <Play className="w-4 h-4 mr-2"/>
                  Watch Platform Tour
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-black mb-4">
                  Trusted by industry leaders
                </p>
                <div className="flex items-center gap-8">
                  <div className="text-black text-bold">Highway Authorities</div>
                  <div className="text-black text-bold">City Traffic Operators</div>
                  <div className="text-black text-bold">
                    Parking Enforcement
                  </div>
                  <div className="text-black text-bold">Urban Planners</div>
                </div>
              </div>
            </div>

            {/* Right: Dashboard Showcase */}
            <div className="2xl:scale-[1.05] 2xl:origin-top">
              <DashboardShowcase/>
            </div>
          </div>
        </div>
      </section>
  <RequestDemoModal open={demoOpen} onClose={() => setDemoOpen(false)}/>
        <PlatformTourModal open={tourOpen} onClose={() => setTourOpen(false)}/>

      </>
);
}