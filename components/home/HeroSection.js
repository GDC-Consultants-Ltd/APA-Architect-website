"use client";
import React, { useState, useEffect } from "react";
import { Facebook, Youtube, Linkedin, Chrome } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroContent = [
    {
      welcome: "Welcome to Apa Architects & Project Managers",
      title: "Designing Homes and Buildings That Enrich Lives",
    },
    {
      welcome: "We turn your vision into beautiful, functional spaces.",
      title: "Expert Architectural Services to Bring Your Dream to Life",
    },
    {
      welcome: "Looking to renovate or build new?",
      title: "Transforming Spaces, Enhancing Lives - One Project at a Time",
    },
  ];

  const socialLinks = [
    { name: "Facebook", Icon: Facebook, url: "https://www.facebook.com/APA-Architects-and-Project-Management-107773769339881" },
    { name: "YouTube", Icon: Youtube, url: "https://www.youtube.com/channel/UCIUxlVxrumvHO_5D9NapD2w" },
    { name: "Google", Icon: Chrome, url: "https://plus.google.com/106821696143508735904/about" },
    { name: "LinkedIn", Icon: Linkedin, url: "https://www.linkedin.com/in/aladina-harunani-69b94618" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Social Media Icons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-row gap-6 z-20">
        {socialLinks.map(({ name, Icon, url }) => (
          <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center
        text-white hover:text-white hover:border-white/40 transition-colors"
          >
            <Icon size={20} />
          </Link>
        ))}
      </div>

      {/* Main Content with Animation */}
      <div className="relative z-10 container mx-auto px-8 py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl text-center">
          {" "}
          {/* Added text-center */}
          {/* Welcome Text */}
          <h5 className="text-[#90b53e] text-xl font-bold uppercase tracking-[0.3em] mb-8 transition-all duration-500 ease-in-out transform">
            {heroContent[currentSlide].welcome}
          </h5>
          {/* Main Title */}
          <h1 className="text-white text-7xl font-bold leading-[1.2] mb-6 transition-all duration-500 ease-in-out transform">
            {heroContent[currentSlide].title.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block mr-[0.3em]"
                style={{
                  animation: `fadeInUp 0.5s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          {/* Call to Action Buttons */}
          <div className="flex gap-8 mb-16 justify-center">
            {" "}
            {/* Added justify-center */}
            <Link
              href="tel:021 543 786"
              className="px-10 py-4 bg-green text-white text-lg font-semibold rounded-full hover:bg-green/90 transition-colors duration-300"
            >
              Call Us
            </Link>
            <Link
              href="#"
              className="px-10 py-4 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
          {/* Slide Indicators */}
          <div className="flex gap-3 pb-8 justify-center">
            {" "}
            {/* Added justify-center */}
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-green w-8"
                    : "bg-white/20 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
