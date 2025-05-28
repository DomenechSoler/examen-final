"use client";


import Link from "next/link";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarItem,
} from "@/components/ui/menubar";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Menubar
      className={`bg-black text-white shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300 border-0 outline-none flex justify-between ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      role="menubar"
    >
      {/* Menú principal */}
      <div className="flex items-center gap-2">
        <MenubarMenu>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <a href="/" className="px-4 py-2 hover:text-gray-300">
              <img src="/Logo.png" alt="Pandem Logo" className="h-10 w-auto" />
            </a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/Docs" className="px-4 py-2 hover:text-gray-300">Docs</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/Pricing" className="px-4 py-2 hover:text-gray-300">Pricing</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/status" className="px-4 py-2 hover:text-gray-300">Status</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/faq" className="px-4 py-2 hover:text-gray-300">FAQ</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/contact" className="px-4 py-2 hover:text-gray-300">Contact Us</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex items-center gap-2 pr-4">
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/login" className="px-4 py-2 hover:text-gray-300">Login</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link
              href="/signup"
              className="px-4 py-2 rounded bg-white hover:bg-gray-200 text-black font-semibold transition-colors"
            >
              Sign Up
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}