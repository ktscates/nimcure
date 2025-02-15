// src/components/Navbar.tsx
"use client"; // Mark this as a Client Component

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname for active link styling

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Array of navigation links
  const navLinks = [
    {
      href: "/overview",
      label: "Overview",
      icon: "/images/overview.svg", // Path to the icon
    },
    {
      href: "/deliveries",
      label: "Deliveries",
      icon: "/images/delivery.svg", // No icon for this link
    },
    {
      href: "/patients",
      label: "Patients",
      icon: "/images/patients.svg", // No icon for this link
    },
    {
      href: "/dispatch-riders",
      label: "Dispatch Riders",
      icon: "/images/dispatch.svg", // No icon for this link
    },
    {
      href: "/admin",
      label: "Admin",
      icon: "/images/admin.svg", // No icon for this link
    },
  ];

  return (
    <nav className="bg-white shadow-md font-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Overview Link */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/seal.png" // Replace with your logo path
                alt="Logo"
                width={43} // Adjust based on your logo size
                height={43}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10 items-center text-base text-dark_grey">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1  hover:text-gray-900 ${
                  pathname === link.href
                    ? "font-bold text-light_blue border-b-4 rounded-sm py-5 border-light_blue "
                    : ""
                }`}
              >
                {link.icon && (
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={16}
                    height={16}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Dropdown for Emmanuel Adigwe */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-dark font-bold hover:text-gray-900 focus:outline-none"
            >
              Emmanuel Adigwe
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
