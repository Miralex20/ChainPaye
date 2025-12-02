import Image from "next/image";
import { motion } from "motion/react";

const Cards = () => {
  return (
    <div className=" w-7xl lg:h-[524px] lg:w-[1252px] items-center bg-primary-container dark:bg-[#2a2a33] pt-8 lg:pl-32 lg:rounded-3xl md:flex-row shadow-xs flex flex-col">
      <div className="flex flex-col-reverse gap-[24px] lg:flex-row lg:gap-[24px] justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{
            once: false,
            amount: "some",
            margin: "-100px 0px -100px 0px",
          }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full"
        >
          <Image
            className="object-cover w-full lg:h-[527px] lg:w-[443px] lg:mb-32 overflow-y-visible px-8"
            src="/images/whatsappChat.png"
            alt=""
            width={322}
            height={659}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{
            once: false,
            margin: "-100px 0px -100px 0px",
          }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col justify-between md:p-4 leading-normal  lg:mx-20"
        >
          <h5 className=" text-[38px] font-medium leading-[42px] tracking-tight w-[331px] h-[126px] text-foreground lg:w-[455px] lg:h-[96px] lg:text-[40px] lg:leading-[48px]">
            Send and receive Money instantly on{" "}
            <span className="font-bold">WhatsApp</span>
          </h5>
          <p className="text-secondary w-[331px] h-[96px] font-medium text-[16px] leading-6 tracking-normal mt-6 lg:text-[18px] lg:leading-7 lg:w-[455px] lg:h-[78px]">
            With Chainpaye, anyone can send and receive money globally, and
            withdraw to their local bank or mobile money - all inside a Whatsapp
            chat.
          </p>
          <div>
            <button className="ml-2 w-60 transform rounded-lg bg-primary px-12 py-4 shadow-2xl font-medium  transition-all duration-300 hover:-translate-y-0.5 mt-6 text-primary-foreground mb-8 cursor-pointer">
              Start on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
