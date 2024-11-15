"use client";
import React, { useState, useEffect } from "react";
import {
  MenuIcon,
  ChevronDown,
  HomeIcon,
  Users2,
  Building2,
  FolderKanban,
  Award,
  MailPlus,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState([]);
  const [currentPath, setCurrentPath] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Get the current path only on the client-side
    setCurrentPath(window.location.pathname);

    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change color after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check for scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <HomeIcon size={20} /> },
    {
      name: "About Us",
      path: "/about",
      icon: <Users2 size={20} />,
      subItems: [
        { name: "Team", path: "/about/guarantee" },
        { name: "Our Philosophy", path: "/about/testimonials" },
        { name: "Green Architecture", path: "/about/how-we-work" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      icon: <Building2 size={20} />,
      subItems: [
        {
          name: "Residential Architecture",
          path: "/services/residential-archi",
        },
        { name: "Commercial Architecture", path: "/services/commercial-archi" },
        { name: "Marae Architecture", path: "/services/marae-archi" },
        { name: "Landscape Architecture", path: "/services/landscape-archi" },
        { name: "Interior Design", path: "/services/interior-design" },
        { name: "House Plans & Floor Plans", path: "/services/house-plans" },
        {
          name: "Architectural Engineering",
          path: "/services/archi-engineering",
        },
        { name: "Project Management", path: "/services/project-management" },
      ],
    },
    { name: "Our Work", path: "/our-work", icon: <FolderKanban size={20} /> },
    { name: "News & Awards", path: "/news-awards", icon: <Award size={20} /> },
    { name: "Contact Us", path: "/contact", icon: <MailPlus size={20} /> },
  ];

  const toggleSubmenu = (itemName) => {
    setExpandedMenus((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const renderNavItem = (item) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedMenus.includes(item.name);
    const isActive =
      currentPath === item.path ||
      item.subItems?.some((subItem) => currentPath === subItem.path);

    return (
      <div key={item.path} className="block">
        <div className="flex items-center justify-between">
          <Link
            href={item.path}
            className={`py-3 text-lg font-medium transition-colors flex items-center gap-3
              ${isActive ? "text-green" : "text-gray/60 hover:text-gray"}`}
            onClick={(e) => {
              if (hasSubItems) {
                e.preventDefault();
                toggleSubmenu(item.name);
              } else {
                setIsOpen(false);
              }
            }}
          >
            <span className={`${isActive ? "text-green" : "text-gray/60"}`}>
              {item.icon}
            </span>
            {item.name}
          </Link>
          {hasSubItems && (
            <button
              onClick={() => toggleSubmenu(item.name)}
              className={`p-2 transition-colors ${
                isActive ? "text-green" : "text-gray/60 hover:text-gray"
              }`}
            >
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* Submenu */}
        {hasSubItems && isExpanded && (
          <div className="pl-4 border-l border-gray/10">
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.path}
                href={subItem.path}
                className={`block py-2 text-base transition-colors
                  ${
                    currentPath === subItem.path
                      ? "text-green"
                      : "text-gray/50 hover:text-gray"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className={`fixed top-8 left-8 z-50 flex items-center gap-3 transition-all duration-300 group
          ${
            isScrolled
              ? "text-green hover:text-green/80"
              : "text-white hover:text-white/80"
          }`}
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon
          size={24}
          className={`transition-all duration-300 group-hover:rotate-90
            ${
              isScrolled
                ? "text-green group-hover:text-green/80"
                : "text-white group-hover:text-white/80"
            }`}
        />
        <span className="text-xl font-bold tracking-wider">MENU</span>
      </button>

      {/* Side Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          className="w-80 bg-white text-gray border-r border-gray/10 overflow-y-auto"
        >
          <SheetHeader className="border-none">
            <div className="flex justify-between items-center mb-8">
              <SheetTitle className="text-white text-lg font-medium">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
              </SheetTitle>
            </div>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="mb-12 space-y-1">{navItems.map(renderNavItem)}</nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideNavigation;
