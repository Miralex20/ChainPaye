"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import svgPaths from "./imports/svg-392y09sygu";

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-right">
          <path
            d={svgPaths.p37a2ad80}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function IconoirWhatsappSolid() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="iconoir:whatsapp-solid"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="iconoir:whatsapp-solid">
          <path
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2c-.143.428.285.857.713.713l3.032-.892A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.987 13.5a2.518 2.518 0 01-1.68.793c-.448 0-1.022-.137-2.346-.7-1.542-.656-3.17-2.286-3.808-3.107-.638-.82-.904-1.64-.904-2.46 0-.82.273-1.503.82-2.05.273-.273.637-.41 1.001-.41.137 0 .273.027.383.055.41.137.547.41.82 1.093.137.41.41 1.093.547 1.366.137.273.137.547 0 .82-.137.274-.273.41-.41.684-.137.137-.273.273-.41.41-.273.273-.41.547-.273.82.41.684 1.23 1.913 2.597 3.107.82.684 1.776 1.094 2.186 1.231.41.137.684.137 1.094-.137.273-.273.684-.82 1.094-1.366.273-.41.547-.41.957-.273.41.136 2.322 1.093 2.733 1.366.41.137.684.273.82.41.137.41.137.957-.137 1.64z"
            fill="var(--fill-0, #5A5F73)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PrimeTwitter() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="prime:twitter"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delayChildren: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-gradient-to-t from-[#ccd9f8] to-[#efeff1] overflow-hidden text-foreground"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20 lg:ml-64">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:h-[230px] lg:w-[1279px]">
          {/* Left - Heading */}
          <div className="h-[144px] lg:w-[578px] lg:h-[96px] text-foreground">
            <h2 className="font-medium text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.4px] text-[#111528]">
              Unlock Borderless Payments With Chainpaye
            </h2>
          </div>

          {/* Right - Description and CTA */}
          <div className="flex flex-col justify-center w-full lg:w-[591px] h-auto pb-10 pr-10 lg:pr-0 lg:pb-0">
            <p className="mb-6 font-medium text-[18px] leading-[26px] text-[#5a5f73]">
              Add seamless global and on-chain payments to your business with
              one lightweight integration — we handle compliance, settlement,
              liquidity, and infrastructure so you can focus on growth.
            </p>
            <div>
              <Link
                href="/contact-form"
                className="bg-[#003dff] text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors hover:bg-[#003dff]/80"
              >
                <span className="font-medium text-[16px] leading-[24px]">
                  Get in touch with us
                </span>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Social Icons - shown only on mobile after CTA */}
        <div className="md:hidden flex items-center gap-4 my-8">
          <a href="#" className="transition-colors">
            <PrimeTwitter />
          </a>
          <a href="#" className="transition-colors">
            <Image
              src="/icons/discord.svg"
              alt="Discord"
              width={24}
              height={24}
              className="shrink-0"
            />
          </a>
          <a href="#" className="transition-colors">
            <Image
              src="/icons/whatsapp-dark.svg"
              alt="WhatsApp"
              width={24}
              height={24}
              className="shrink-0 "
            />
          </a>
        </div>

        {/* Middle Section - Navigation and Social */}
        <div className="md:flex md:flex-wrap md:items-center md:justify-between md:gap-6 md:pb-12 md:border-b md:border-[#e3e3e3]">
          {/* Navigation Links - Vertical on mobile, horizontal on desktop */}
          <nav className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-6 md:gap-8 mb-8 pb-8 border-b border-[#e3e3e3] md:mb-0 md:pb-0 md:border-0 lg:w-[448px] lg:text-[16px] lg:leading-6">
            <a
              href="#"
              className="font-medium text-[16px] leading-[24px] text-[#5a5f73] transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="font-medium text-[16px] leading-[24px] text-[#5a5f73] transition-colors"
            >
              Developers
            </a>
            <a
              href="#"
              className="font-medium text-[16px] leading-[24px] text-[#5a5f73] transition-colors"
            >
              Use cases
            </a>
          </nav>

          {/* Social Icons - Desktop only */}
          <motion.div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-[#5a5f73] hover:text-[#111528] transition-colors"
            >
              <PrimeTwitter />
            </a>
            <a
              href="#"
              className="text-[#5a5f73] hover:text-[#111528] transition-colors"
            >
              <Image
                src="/icons/discord.svg"
                alt="Discord"
                width={24}
                height={24}
                className="shrink-0"
              />
            </a>
            <a
              href="#"
              className="text-[#5a5f73] hover:text-[#111528] transition-colors"
            >
              <Image
                src="/icons/whatsapp-dark.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="shrink-0"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-2 md:gap-4 pt-8 md:pt-8 mt-8 md:mt-0 font-['Sora:Regular',sans-serif] text-[16px] text-[#5a5f73]">
          <p>©2025 Chainpaye</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
      {/* <Frame1874428457 /> */}

      {/* Background Large Text */}
      <div className="absolute bottom-25 left-3 lg:top-25 lg:left-6 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="text-[4rem] text-[#bccfff] md:text-[16rem] font-extrabold lg:text-[330px] select-none opacity-30 tracking-[1.92px] lg:tracking-[1%] lg:leading-[100%]">
          CHAINPAYE
        </div>
      </div>
    </motion.footer>
  );
}
