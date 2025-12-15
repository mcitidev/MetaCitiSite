"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
//import { OttonomiLogo } from "@/components/ottonomi-logo";
import Image from "next/image";

function scrollToSection(id: string, closeMenu?: () => void) {
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_HEIGHT = 72; // matches your mobile height
    const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_HEIGHT;

    window.scrollTo({
        top: y,
        behavior: "smooth",
    });

    if (closeMenu) closeMenu();
}


export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="navbar fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
            <nav className="navbar-inner max-w-7xl mx-auto px-6 lg:px-8">
                <div className="navbar-row flex items-center justify-between h-20">

                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/ottologo.png"
                            alt="Ottonomi Logo"
                            width={150}  // adjust as needed
                            height={50}  // adjust as needed
                            className="object-contain"
                        />
                        <span className="text-gray-900 font-semibold text-lg tracking-tight">
            </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
                        <button onClick={() => scrollToSection("home")}
                                className="hover:text-gray-900 transition-colors">Home
                        </button>
                        <button onClick={() => scrollToSection("capabilities")}
                                className="hover:text-gray-900 transition-colors">Capabilities
                        </button>
                        <button onClick={() => scrollToSection("sectors")}
                                className="hover:text-gray-900 transition-colors">Sectors
                        </button>
                        <button onClick={() => scrollToSection("dashboard")}
                                className="hover:text-gray-900 transition-colors">Dashboard
                        </button>
                        <button onClick={() => scrollToSection("benefits")}
                                className="hover:text-gray-900 transition-colors">Benefits
                        </button>
                        <button onClick={() => scrollToSection("contact")}
                                className="hover:text-gray-900 transition-colors">Contact
                        </button>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="#demo"
                            className="px-5 py-2 rounded-md bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md transition"
                        >
                            Request Demo
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="navbar-toggle lg:hidden p-2"
                    >
                        {mobileOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-4">
                        <div className="flex flex-col gap-4 text-gray-700 font-medium">


                            <button onClick={() => scrollToSection("home")}
                                    className="hover:text-gray-900 transition-colors">Home
                            </button>
                            <button onClick={() => scrollToSection("capabilities")}
                                    className="hover:text-gray-900 transition-colors">Capabilities
                            </button>
                            <button onClick={() => scrollToSection("sectors")}
                                    className="hover:text-gray-900 transition-colors">Sectors
                            </button>
                            <button onClick={() => scrollToSection("dashboard")}
                                    className="hover:text-gray-900 transition-colors">Dashboard
                            </button>
                            <button onClick={() => scrollToSection("benefits")}
                                    className="hover:text-gray-900 transition-colors">Benefits
                            </button>
                            <button onClick={() => scrollToSection("contact")}
                                    className="hover:text-gray-900 transition-colors">Contact
                            </button>

                            <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                            <Link
                                    href="#demo"
                                    className="w-full text-center px-5 py-3 rounded-md bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md transition"
                                >
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
