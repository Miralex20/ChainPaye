import Image from "next/image";
import { motion } from "motion/react";

const Cards = () => {
  return (
    <div className=" w-7xl lg:h-[524px] lg:w-[1252px] items-center bg-primary-container pt-8 lg:pl-32 lg:rounded-3xl md:flex-row shadow-xs flex flex-col">
      <div className="flex flex-col-reverse gap-[24px] lg:flex-row lg:gap-[24px] justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{
            once: true,
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
            className="object-cover w-full lg:h-[527px] lg:w-[443px] lg:mb-32 overflow-y-visible px-8 mt-24"
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
            once: true,
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
            <button className="w-[221px] h-[48px] transform rounded-lg bg-primary px-4 py-4 font-medium text-primary-foreground flex gap-4 items-center hover:bg-primary/80 transition-all duration-300 my-(--spacing-lg) mt-4">
              <Image
                src="icons/whatsapp.svg"
                alt="whatsapp icon"
                width={24}
                height={24}
                className="text-primary-foreground cursor-pointer hover:text-primary-foreground/80 transition-all duration-300"
              />
              <p>Start on WhatsApp</p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
