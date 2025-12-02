import { motion } from "motion/react";
import ChatVideo from "@/components/ChatVideo";
import { ImageWithFallback } from "@/components/figma/imageWithFallback";

const Hero2 = () => {
  return (
    <div>
      {/* PHONE - ALWAYS VISIBLE */}
      {/* RIGHT BUBBLE - HIDDEN ON MOBILE */}
      <div className="relative z-20 scale-90 sm:scale-95 md:scale-100 lg:scale-105 lg:mb-50 bg-[url('/images/phoneBg.png')] bg-cover bg-center bg-no-repeat">
        <motion.div
          className="absolute right-10
                    lg:top-30"
          initial={{ opacity: 0, x: 80, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-white shadow-2xl mb-3 md:mb-4 z-10"
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

            <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-3xl px-5 py-4 md:px-7 md:py-5 shadow-xl">
              <p className="font-semibold text-sm md:text-lg">
                Received, Chris 👑
              </p>
              <p className="text-2xl md:text-4xl font-bold mt-1">₦35,000,000</p>

              <div
                className="absolute -top-3 right-8 w-0 h-0 
              border-r-[16px] border-r-transparent
              border-b-[20px] border-b-emerald-600
              border-l-[16px] border-l-transparent
              rotate-12
            "
              />
            </div>
          </div>
        </motion.div>
        <ChatVideo />
        {/* LEFT BUBBLE - HIDDEN ON MOBILE */}
        <motion.div
          className="absolute left-2 sm:left-4 md:left-8 lg:left-12 xl:left-20 
                   bottom-16 sm:bottom-20 md:bottom-28 lg:bottom-36 hidden md:block"
          initial={{ opacity: 0, x: -80, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-white shadow-2xl mb-3 md:mb-4 z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop"
                alt="Sender"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-3xl px-5 py-4 md:px-7 md:py-5 shadow-xl">
              <p className="font-semibold text-sm md:text-lg">Sent! 💸</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl md:text-3xl">🇺🇸</span>
                <p className="text-2xl md:text-4xl font-bold">$25,000</p>
              </div>

              <div
                className="absolute -top-3 left-8 w-0 h-0 
              border-l-[16px] border-l-transparent
              border-b-[20px] border-b-purple-600
              border-r-[16px] border-r-transparent
              -rotate-12
            "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;
