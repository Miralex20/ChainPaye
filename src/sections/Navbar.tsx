"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import Image from "next/image";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(
    () => setMounted(true),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const isDark = resolvedTheme === "dark";

  if (!mounted)
    return <div className="h-8 w-14 rounded-full bg-gray-200 animate-pulse" />;

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-8 w-14 items-center rounded-full transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "duration-500 ease-out", // ← critical: same duration everywhere
        isDark ? "bg-zinc-600/80" : "bg-gray-200/80"
      )}
    >
      {/* ON-state glow (light mode only) – perfectly synced */}
      <span
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full bg-sky-400/50 blur-xl transition-opacity duration-500",
          isDark ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Sliding knob – the star of the show */}
      <span
        className={cn(
          "pointer-events-none relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-500 ease-out",
          "ring-1 ring-black/5",
          isDark
            ? "translate-x-7 translate-y-0.5 scale-95 shadow-md"
            : "translate-x-1 translate-y-0 scale-100 shadow-xl"
        )}
      >
        {/* Sun – fades & rotates in/out */}
        <Sun
          className={cn(
            "h-4.5 w-4.5 text-yellow-500 transition-all duration-500 ease-out",
            isDark
              ? "opacity-0 rotate-180 scale-0"
              : "opacity-100 rotate-0 scale-100"
          )}
        />

        {/* Moon – opposite animation */}
        <Moon
          className={cn(
            "absolute h-4 w-4 text-gray-800 transition-all duration-500 ease-out",
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-180 scale-0"
          )}
        />
      </span>
    </button>
  );
}

function Navigation() {
  const navItems = [
    {
      name: "For Businesses",
      link: "/business",
    },
    {
      name: "Use cases",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <NavbarButton className="bg-primary text-primary-foreground flex gap-4 items-center justify-center mr-6">
              <Image
                src="icons/whatsapp.svg"
                alt="whatsapp icon"
                width={24}
                height={24}
                className="text-primary-foreground"
              />
              Start on WhatsApp
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            <div className="flex items-center space-x-4 mr-8">
              <ThemeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-primary text-primary-foreground flex items-center justify-center gap-4"
              >
                <Image
                  src="icons/whatsapp.svg"
                  alt="whatsapp icon"
                  width={24}
                  height={24}
                  className="text-primary-foreground"
                />
                Start on Whatsapp
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default Navigation;
