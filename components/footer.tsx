"use client";

import { OttonomiLogo } from "@/components/ottonomi-logo";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const solutions = ["Real-Time Traffic", "Urban Planning", "Incident Detection", "Predictive Analytics"];
  const resources = ["Case Studies", "Blog", "FAQ", "Documentation"];
  const company = ["About Us", "Contact", "Careers", "Privacy Policy"];

  return (
      <footer className="[font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Arial,sans-serif] relative bg-gradient-to-br from-[#1A1A1A] via-[#111827] to-black text-gray-300 pt-20 pb-12 px-6 lg:px-8 overflow-hidden">

        {/* Decorative Blur Glows (premium SaaS look) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-700/20 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-900/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">

          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <Image
                    src="/ottologo.png"
                    alt="Ottonomi Logo"
                    width={250}  // adjust as needed
                    height={150}  // adjust as needed
                    className="object-contain"
                />
              </div>

              <p className="text-gray-300/80 max-w-sm">
                Transforming traffic management with autonomous AI-powered insights for smarter, safer cities worldwide.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                    <a
                        key={i}
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                ))}
              </div>
            </div>

            {/* Solutions
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                {solutions.map((item) => (
                    <li key={item}>
                      <a
                          href="#"
                          className="text-gray-300/70 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                ))}
              </ul>
            </div>*/}

            {/* Resources
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {resources.map((item) => (
                    <li key={item}>
                      <a
                          href="#"
                          className="text-gray-300/70 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                ))}
              </ul>
            </div>*/}

            {/* Company
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                    <li key={item}>
                      <a
                          href="#"
                          className="text-gray-300/70 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                ))}
              </ul>
            </div>*/}

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300/70 text-sm">
              © 2025 Ottonomi AI. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300/70 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

        </div>
      </footer>
  );
}
