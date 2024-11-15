"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "Residential Architecture",
      image: "/assets/images/services/1.png",
      description:
        "Creating comfortable, functional homes that blend aesthetic appeal with practical design solutions.",
      link: "/services/furniture",
    },
    {
      title: "Commercial Architecture",
      image: "/assets/images/services/2.jpg",
      description:
        "Innovative commercial spaces designed to enhance productivity and create a strong brand identity.",
      link: "/services/carpentry",
    },
    {
      title: "Marae & Cultural Architecture",
      image: "/assets/images/services/3.jpg",
      description:
        "Designing culturally significant Marae spaces that honor heritage and foster community bonds.",
      link: "/services/remodeling",
    },
    {
      title: "Landscape Architecture",
      image: "/assets/images/services/4.jpg",
      description:
        "Creating outdoor spaces that integrate natural beauty with sustainable design principles.",
      link: "/services/furniture",
    },
    {
      title: "Interior Design",
      image: "/assets/images/services/5.jpg",
      description:
        "Crafting interiors that blend style with comfort, tailored to enhance living and working spaces.",
      link: "/services/carpentry",
    },
    {
      title: "House & Floor Plans",
      image: "/assets/images/services/6.jpeg",
      description:
        "Developing efficient floor plans that maximize space, functionality, and aesthetic flow.",
      link: "/services/remodeling",
    },
    {
      title: "Architectural Engineering",
      image: "/assets/images/services/7.jpg",
      description:
        "Offering engineering solutions that ensure structural integrity and compliance with standards.",
      link: "/services/remodeling",
    },
    {
      title: "Project Management",
      image: "/assets/images/services/8.jpg",
      description:
        "Comprehensive project management from planning to execution, ensuring timely and quality outcomes.",
      link: "/services/remodeling",
    },
  ];

  return (
    <div className="relative py-20 px-8">
      {/* Overlay Background */}
      <div className="absolute inset-0" />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <div className="flex justify-center items-center gap-1">
          <div className="w-16 h-[1px] bg-white/20"></div>
          <div className="w-4 h-1 bg-green"></div>
          <div className="w-16 h-[1px] bg-white/20"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative cursor-pointer h-[400px]"
            >
              {/* Main Image */}

              <div className="relative h-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Default Overlay */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Default Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transition-transform duration-300 group-hover:-translate-y-full">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-green mx-auto" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-green/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-6">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-white border-2 border-white px-6 py-2 rounded-full
          hover:bg-white hover:text-green transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
