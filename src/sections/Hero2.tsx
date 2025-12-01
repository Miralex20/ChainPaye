import { motion } from "motion/react";
import ChatVideo from "@/components/ChatVideo";
import { ImageWithFallback } from "@/components/figma/imageWithFallback";

const Hero2 = () => {
  return (
    <div
    // className="relative w-full max-w-7xl bg-[url('/images/phoneBg.png')] bg-cover bg-center bg-no-repeat
    //            rounded-3xl md:rounded-[48px] shadow-2xl
    //            flex items-center justify-center"
    >
      {/* LEFT BUBBLE - VISIBLE ON ALL SCREENS */}
      <motion.div
        className="absolute left-1 sm:left-2 md:left-8 lg:left-12 xl:left-20 
                   bottom-55 sm:bottom-40 md:bottom-28 lg:bottom-36"
        initial={{ opacity: 0, x: -80, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 sm:ring-3 md:ring-4 ring-white shadow-2xl mb-1 sm:mb-2 md:mb-4 z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop"
              alt="Sender"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl sm:rounded-3xl px-2 py-2 sm:px-4 sm:py-3 md:px-7 md:py-5 shadow-xl">
            <p className="font-semibold text-[10px] sm:text-xs md:text-lg">
              Sent! 💸
            </p>
            <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
              <span className="text-sm sm:text-xl md:text-3xl">🇺🇸</span>
              <p className="text-sm sm:text-xl md:text-4xl font-bold">
                $25,000
              </p>
            </div>

            <div
              className="absolute -top-2 left-4 sm:left-6 md:left-8 w-0 h-0 
              border-l-[8px] sm:border-l-[12px] md:border-l-[16px] border-l-transparent
              border-b-[10px] sm:border-b-[15px] md:border-b-[20px] border-b-purple-600
              border-r-[8px] sm:border-r-[12px] md:border-r-[16px] border-r-transparent
              -rotate-12
            "
            />
          </div>
        </div>
      </motion.div>

      {/* RIGHT BUBBLE - VISIBLE ON ALL SCREENS */}
      <motion.div
        className="absolute right-0 sm:right-2 md:right-8 lg:right-12 xl:right-20 
                   top-120 sm:bottom-48 md:bottom-44 lg:bottom-56"
        initial={{ opacity: 0, x: 80, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 sm:ring-3 md:ring-4 ring-white shadow-2xl mb-1 sm:mb-2 md:mb-4 z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop"
              alt="Receiver"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl sm:rounded-3xl px-2 py-2 sm:px-4 sm:py-3 md:px-7 md:py-5 shadow-xl">
            <p className="font-semibold text-[10px] sm:text-xs md:text-lg">
              Received, Chris 👑
            </p>
            <p className="text-sm sm:text-xl md:text-4xl font-bold mt-0.5 sm:mt-1">
              ₦35,000,000
            </p>

            <div
              className="absolute -top-2 right-4 sm:right-6 md:right-8 w-0 h-0 
              border-r-[8px] sm:border-r-[12px] md:border-r-[16px] border-r-transparent
              border-b-[10px] sm:border-b-[15px] md:border-b-[20px] border-b-emerald-600
              border-l-[8px] sm:border-l-[12px] md:border-l-[16px] border-l-transparent
              rotate-12
            "
            />
          </div>
        </div>
      </motion.div>

      {/* PHONE - ALWAYS VISIBLE */}
      <div className="relative z-20 scale-90 sm:scale-95 md:scale-100 lg:scale-105">
        <ChatVideo />
      </div>
    </div>
  );
};

export default Hero2;
