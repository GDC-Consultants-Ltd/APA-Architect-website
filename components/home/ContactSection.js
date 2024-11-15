import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="relative bg-green ">
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-0">
              Wanna Work With Our Professional Team? Contact Us.
            </h2>

            <Link href="/contact">
              <Button
                variant="secondary"
                className="bg-white hover:bg-gray-100 text-gray-800 rounded-full px-10 py-6 flex items-center gap-2 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
