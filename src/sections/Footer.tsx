"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delayChildren: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      className={`relative bg-linear-to-t from-[#ccd9f8] lg:py-20 to-[#efeff1] dark:from-[#0b1837] dark:to-[#202024] overflow-hidden animate-gradient text-foreground`}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:ml-64">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:h-[230px] lg:w-[1279px] ">
          {/* Left - Heading */}
          <div className="w-[382px] h-[144px] lg:w-[578px] lg:h-[96px] ">
            <h2 className=" font-medium text-[40px] leading-[42px] lg:leading-[48px] lg:tracking-tight">
              Unlock Borderless Payments With Chainpaye
            </h2>
          </div>

          {/* Right - Description and CTA */}
          <div className="flex flex-col justify-center w-[382px] h-[202px] pb-20">
            <p className="mb-6 font-medium text-18px leading-[26px] text-secondary tracking-normal lg:w-[591px]">
              Add seamless global and on-chain payments to your business with
              one lightweight integration — we handle compliance, settlement,
              liquidity, and infrastructure so you can focus on growth.
            </p>
            <div>
              <button className="bg-primary text-foreground px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors">
                Get in touch with us
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Social Icons - shown only on mobile after CTA */}
        <div className="md:hidden flex items-center gap-4 my-8 w-[72px]">
          <a href="#" className={` transition-colors`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" className={` transition-colors`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
            </svg>
          </a>
        </div>

        {/* Middle Section - Navigation and Social */}
        <div
          className={` md:flex md:flex-wrap md:items-center md:justify-between md:gap-6 md:pb-12 md:border-b `}
        >
          {/* Navigation Links - Vertical on mobile, horizontal on desktop */}
          <nav className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-6 md:gap-8 mb-8 pb-8 md:mb-0 lg:w-[448px] lg:text-[16px] lg:leading-6">
            <a href="#" className={` transition-colors`}>
              Solutions
            </a>
            <a href="#" className={` transition-colors`}>
              Developers
            </a>
            <a href="#" className={` transition-colors`}>
              Use cases
            </a>
          </nav>

          {/* Social Icons - Desktop only */}
          <motion.div className="hidden md:flex items-center gap-4">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <div
          className={`flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-2 md:gap-4 pt-8 md:pt-8 md:border-t-0 mt-8 md:mt-0`}
        >
          <p>©2025 Chainpaye</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>

      {/* Background Large Text */}
      <div className="absolute bottom-25 lg:top-25 lg:left-6 flex items-center justify-center overflow-hidden pointer-events-none">
        <div
          className={`text-[6rem] text-[#bccfff] dark:text-[#16245b] md:text-[16rem] font-extrabold lg:text-[20rem]  select-none opacity-30`}
        >
          CHAINPAYE
        </div>
      </div>
    </motion.footer>
  );
}
