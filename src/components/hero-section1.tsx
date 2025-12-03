"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";

export default function HeroSectionOne() {
  const words = ["Globally", "Securely", " Instantly"];
  return (
    <>
      <div className="gap-(--spacing-xl) w-[403px] h-[226px] lg:w-[1115px] lg:h-[271px] lg:gap-(--spacing-2xl) flex flex-col items-center justify-center pt-18 max-w-7xl px-8 text-foreground mt-12">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.2,
            delay: 1,
            ease: "easeInOut",
          }}
          className="relative w-[403px] h-[146px] text-center tracking-[-2%] text-[32px] font-bold leading-[120%] lg:w-[1115px] lg:h-[135px] lg:text-[54px] lg:leading-[62px] lg:font-semibold"
        >
          Pay, Send And Receive <br />
          Money{" "}
          <FlipWords
            duration={3000}
            className="text-[#003dff]"
            words={words}
          />{" "}
          As Simple As A Chat
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 3,
            ease: "easeInOut",
          }}
          className="relative z-10 w-[403px] h-[56px] text-center text-xl leading-[28px] font-medium text-(--text-secondary) mb-16 lg:w-[616px] lg:h-[28px]"
        >
          Send and receive money worldwide - instantly on WhatsApp
        </motion.p>
      </div>
      <motion.div
        animate={{ y: -10 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="relative z-10 m-(--spacing-sm) lg:m-(--spacing-lg) flex flex-wrap items-center justify-center gap-4 lg:gap-(--spacing-lg) lg:mb-32"
      >
        <button className="w-[221px] h-[48px] transform rounded-lg bg-primary px-4 py-4 font-medium text-primary-foreground flex gap-4 items-center hover:bg-primary/80 transition-all duration-300 my-(--spacing-lg) mt-4 lg:mt-0">
          <Image
            src="icons/whatsapp.svg"
            alt="whatsapp icon"
            width={24}
            height={24}
            className="text-primary-foreground"
          />
          <p>Start on WhatsApp</p>
        </button>
      </motion.div>
    </>
  );
}
