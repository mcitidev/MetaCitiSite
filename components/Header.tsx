"use client";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="[font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Arial,sans-serif] fixed top-0 w-screen bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#B7094C] to-[#723C70] rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#0091AD] rounded" />
            </div>
            <span className="text-gray-900">VisionTech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
              Solutions
            </a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">
              Resources
            </a>
            <a href="#company" className="text-gray-600 hover:text-gray-900 transition-colors">
              Company
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-gradient-to-r from-[#B7094C] to-[#A01A58] hover:from-[#A01A58] hover:to-[#892B64] text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
                Products
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
                Solutions
              </a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">
                Resources
              </a>
              <a href="#company" className="text-gray-600 hover:text-gray-900 transition-colors">
                Company
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full bg-gradient-to-r from-[#B7094C] to-[#A01A58] hover:from-[#A01A58] hover:to-[#892B64] text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}