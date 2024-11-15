import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import BlogSection from "@/components/home/BlogsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gray/60 z-10" /> {/* Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/poster-image.jpg" 
          className="w-full h-full object-cover"
          src="/assets/videos/company.mp4"
        />
      </div>
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
