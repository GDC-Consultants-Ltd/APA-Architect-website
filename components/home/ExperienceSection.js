"use client";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExperienceSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetCount = 20;
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white">
      {/* Diagonal Background Image */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background: `url('/assets/images/background/pattern-8.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Removed bg-white class */}
          <div className="space-y-8">
            {/* Counter Box */}
            <div className="flex items-start gap-8">
              <div className="p-4 shadow-lg inline-flex">
                <span className="text-green text-8xl font-bold">{count}</span>
              </div>
              <div className="pt-4">
                <h2 className="text-4xl font-bold text-gray mb-2">
                  YEARS OF EXPERIENCE
                </h2>
                <p className="text-xl text-green">IN THIS INDUSTRY</p>
              </div>
            </div>

            <div className="relative">
              <h3 className="text-4xl font-bold text-gray">
                <span className="text-green">Creating Timeless & Holistic</span>{" "}
                Architectural Designs
              </h3>
              <div className="relative mt-4">
                <div className="absolute left-0 w-24 h-1 bg-green" />{" "}
                {/* Main line */}
                <div className="absolute left-0 w-12 h-1 bg-green/30 my-2" />{" "}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              At Apa Architects & Project Managers, we believe in creating
              spaces that blend physical and spiritual elements, bringing
              clients’ dreams to life with a sustainable approach.
              <br />
              Our team, led by Aladina Harunani with over 20 years of
              international experience, has delivered numerous award-winning
              projects, including the Supreme Award at the ADNZ 2016 for the
              Tanatana Marae.
              <br />
            </p>

            {/* Signature and Contact */}
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <Link href="/about" className="inline-block">
                  <button className="bg-gray text-white px-8 py-3 rounded-full hover:bg-gray/90 transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>

              <div className="text-right">
                <p className="text-gray-600 mb-2">Hotline</p>
                <Link
                  href="tel:021 543 786"
                  className="flex items-center justify-end gap-2 text-2xl font-semibold text-gray hover:text-green transition-colors duration-300"
                >
                  <Phone className="h-6 w-6" />
                  021 543 786
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl max-w-[400px]">
              {" "}
              {/* Added max-width */}
              <Image
                src="/assets/images/Aladina Harunani v2.webp"
                alt="Team"
                width={600} // Specify actual width
                height={450} // Specify actual height
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 600px"
                quality={100} // Maximum quality
                priority // Load image with priority
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
