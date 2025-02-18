// src/components/NavbarWrapper.tsx
"use client"; // Mark this as a Client Component

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login" || pathname === "/";

  if (isLoginPage) return null;

  return <Navbar />;
};

export default NavbarWrapper;
