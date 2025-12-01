import Image from "next/image";
import { motion } from "motion/react";

const Cards = () => {
  return (
    <div className=" h-[880px] w-7xl lg:h-[707px] lg:w-[80%] items-center bg-primary-container dark:bg-[#242433] pt-8 lg:pl-32  lg:rounded-3xl md:flex-row shadow-xs flex flex-col">
      <div className="flex flex-col-reverse gap-[24px]">
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
            className="object-cover w-full  lg:h-[727px] lg:w-[503px] mb-4 md:mb-0"
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
          <h5 className=" text-[38px] font-medium leading-[42px] tracking-tight w-[331px] h-[126px] text-foreground">
            Send and receive Money instantly <br />
            on <span className="font-bold">WhatsApp</span>
          </h5>
          <p className="text-secondary w-[331px] h-[96px] font-medium text-[16px] leading-6 tracking-normal mt-6">
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
