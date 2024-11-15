import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Chrome, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-gray/90 text-gray-100 py-16">
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gray/60 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center p-2 rounded">
                <Image
                  src="/assets/images/logo.png"
                  alt="T.Wilson Builders"
                  width={180}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 relative">
                NAVIGATION
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500 -mb-2"></span>
              </h3>
              <nav className="space-y-3">
                <Link
                  href="/"
                  className="block text-gray-100 hover:text-green-500 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-100 hover:text-green-500 transition-colors font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="block text-gray-100 hover:text-green-500 transition-colors font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/our-works"
                  className="block text-gray-100 hover:text-green-500 transition-colors font-medium"
                >
                  Our Work
                </Link>
                <Link
                  href="/news-awards"
                  className="block text-gray-100 hover:text-green-500 transition-colors font-medium"
                >
                  News & Awards
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-100 hover:text-green-500 transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 relative">
                GET IN TOUCH
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500 -mb-2"></span>
              </h3>
              <div className="space-y-3">
              <div>
                  <p className="font-bold text-white">Address:</p>
                  <p
                    className="text-gray-100 hover:text-green-500 transition-colors"
                  >
                    apa Architects & Project Managers, 1146 Eruera Street, Rotorua
                  </p>
                </div>
                <div>
                  <p className="font-bold text-white">Phone:</p>
                  <a
                    href="tel:0224197176"
                    className="text-gray-100 hover:text-green-500 transition-colors"
                  >
                    0224197176
                  </a>
                </div>
                <div>
                  <p className="font-bold text-white">Email:</p>
                  <a
                    href="mailto:apa@apaarchitect.com"
                    className="text-gray-100 hover:text-green-500 transition-colors"
                  >
                    apa@apaarchitect.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 relative">
                FOLLOW US
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500 -mb-2"></span>
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-green-500 p-2 rounded-lg hover:bg-gray-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-green-500 p-2 rounded-lg hover:bg-gray-600 transition-colors"
                  aria-label="Chrome"
                >
                  <Chrome size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-green-500 p-2 rounded-lg hover:bg-gray-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-green-500 p-2 rounded-lg hover:bg-gray-600 transition-colors"
                  aria-label="Linkedin"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="text-gray-300 py-4 text-sm relative z-10">
        <div className="container mx-auto px-4">
          <p className="text-center">
            Copyright © {currentYear}{" "}
            <Link
              href="https://www.gdcdigital.net/"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDC Digital Solutions
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
