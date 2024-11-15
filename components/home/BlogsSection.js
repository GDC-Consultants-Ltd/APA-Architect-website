"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Blog posts data structure
  const blogPosts = [
    {
      id: 1,
      title: "Funding Application Workshops for Marae",
      author: "Admin",
      date: "06 FEB 2019",
      readTime: "5 min read",
      excerpt:
        "MARAE DEVELOPMENT AND MARAE FEASIBILITY WORKSHOP ON ZOOM. An opportunity for Marae Trustees and Building committee members to learn from shared experience with crucial steps outlined in helping you towards your Marae development.",
      content:
        "MARAE DEVELOPMENT AND MARAE FEASIBILITY WORKSHOP ON ZOOM. An opportunity for Marae Trustees and Building committee members to learn from shared experience with crucial steps outlined in helping you towards your Marae development. Information [...]",
      image: "/assets/images/services/1.png",
      thumbnail: "/assets/images/services/1.png",
      categories: ["Marae", "Development", "Workshop"],
      slug: "funding-application-workshops-marae",
    },
    {
      id: 2,
      title: "Architect, Architectural Designer or Draughtsperson?",
      author: "Admin",
      date: "30 JUL 2018",
      readTime: "4 min read",
      excerpt:
        "Here at apa Architects & Project Managers, we often get asked 'What is the difference between an Architect, an Architectural Designer and a Draughtsperson?' We recently found an excellent article on this very topic over [...]",
      content:
        "Here at apa Architects & Project Managers, we often get asked 'What is the difference between an Architect, an Architectural Designer and a Draughtsperson?' We recently found an excellent article on this very topic over [...]",
      image: "/assets/images/services/2.jpg",
      thumbnail: "/assets/images/services/2.jpg",
      categories: ["Architecture", "Career", "Design"],
      slug: "architect-architectural-designer-draughtsperson",
    },
    {
      id: 3,
      title:
        "apa Architect & Project Managers. Green Buildings. Green Vehicles",
      author: "Admin",
      date: "23 JUL 2018",
      readTime: "6 min read",
      excerpt:
        "Here at APA Architects and Project Management. we have a strong philosophy that our designs will help leave the planet richer than we found it. Green architecture is about creating a design that would [...]",
      content:
        "Here at APA Architects and Project Management. we have a strong philosophy that our designs will help leave the planet richer than we found it. Green architecture is about creating a design that would [...]",
      image: "/assets/images/services/3.jpg",
      thumbnail: "/assets/images/services/3.jpg",
      categories: ["Green Buildings", "Sustainability", "Architecture"],
      slug: "apa-architect-project-managers-green-buildings-vehicles",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get current blog post
  const currentPost = blogPosts[currentSlide];

  return (
    <div className="relative py-20 px-8">
      {/* Background remains the same */}
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/background/pattern-8.png"
          alt="background"
          fill
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray/70" />
        {/* Pattern Overlay - Optional */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/assets/images/background/pattern-8.png')`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green mb-4">
            Exciting developments, business wins & recognition
          </h3>
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest News & Awards
          </h2>
          <div className="flex items-center gap-1">
            <div className="w-16 h-[1px] bg-white/20"></div>
            <div className="w-4 h-1 bg-green"></div>
            <div className="w-16 h-[1px] bg-white/20"></div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Blog Content */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="space-y-6">
                {/* Date */}
                <div className="inline-block bg-green text-white text-sm font-semibold px-3 py-1 rounded">
                  {currentPost.date}
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <h4 className="text-3xl font-semibold text-white">
                    {currentPost.title}
                  </h4>
                  {/* Author & Reading Time */}
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <span className="flex items-center gap-2">
                      <span>By</span>
                      <span className="text-green">{currentPost.author}</span>
                    </span>
                    <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                    <span>{currentPost.readTime}</span>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="space-y-4">
                  <p className="text-white/90 text-base leading-relaxed">
                    {currentPost.excerpt}
                  </p>
                  <div className="pt-4">
                    <Link
                      href={"/"}
                      className="text-green hover:text-green/80 transition-colors duration-300 
                        inline-flex items-center gap-2 font-medium"
                    >
                      Read Full Article
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Categories/Tags */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {currentPost.categories.map((category, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                  text-white hover:border-green hover:text-green transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-white/60 text-sm">
                Post {currentSlide + 1} of {blogPosts.length}
              </span>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                  text-white hover:border-green hover:text-green transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 aspect-[4/3]">
              <Image
                src={currentPost.image}
                alt={currentPost.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4 mt-6 justify-center overflow-x-auto pb-2">
              {blogPosts.map((post, index) => (
                <button
                  key={post.id}
                  onClick={() => goToSlide(index)}
                  className={`relative shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300
                    ${
                      currentSlide === index
                        ? "ring-2 ring-green scale-110"
                        : "opacity-50 hover:opacity-75"
                    }`}
                >
                  <Image
                    src={post.thumbnail}
                    alt={`Go to ${post.title}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
