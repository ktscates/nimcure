// src/components/NavbarWrapper.tsx
"use client"; // Mark this as a Client Component

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  // Check if the current route is the login page
  const isLoginPage = pathname === "/login" || pathname === "/";

  // Don't render the Navbar on the login page
  if (isLoginPage) return null;

  return <Navbar />;
};

export default NavbarWrapper;
