import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Card {
  title: string;
  content: string;
}

const cards: Card[] = [
  {
    title: "For Individuals",
    content:
      "Send and receive money instantly, no extra apps needed.\n\nPay friends, family, or split bills with ChainPaye fast, secure, and easy.",
  },
  {
    title: "For Businesses",
    content:
      "Leverage our APIs to scale your business while accepting global payments in USD 🇺🇸, EUR 🇪🇺, GBP 🇬🇧, — and more coming soon. Funds are automatically converted into NGN 🇳🇬, GHS 🇬🇭, or KES 🇰🇪 at real-time rates.",
  },
  {
    title: "For Freelancers & Creators",
    content:
      "Generate a payment link using ChainPaye and get settled in less than a minute.\n\nClients pay through a bank card or bank transfers for US 🇺🇸, 🇪🇺 EUR 🇪🇺 and GBP 🇬🇧 uses Bank card strictly",
  },
];

export function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return cards.length - 1;
      if (nextIndex >= cards.length) return 0;
      return nextIndex;
    });
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      const scrollLeft = index * cardWidth;
      scrollRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    setCurrentIndex(index);
  };

  const getPrevIndex = () => (currentIndex - 1 + cards.length) % cards.length;
  const getNextIndex = () => (currentIndex + 1) % cards.length;

  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <div className="w-[417px] h-[20px] mb-16 gap-4 flex flex-col items-center justify-center">
        <h1 className="font-medium tracking-tight text-[27.83px] text-[#111528] leading-[30.78px] dark:text-white">
          Real world application{" "}
        </h1>
        <p className="text-[13.18px] font-medium leading-[19.04px] tracking-normal text-secondary dark:text-(--text-tertiary)">
          Discover how people and businesses use Chainpaye
        </p>
      </div>
      {/* Mobile Horizontal Scroll */}
      <div className="lg:hidden w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 px-8 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[85%]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-background dark:bg-[#242433] rounded-3xl shadow-xl p-6 h-full">
                <h2 className="text-gray-900 font-bold dark:text-white mb-4">
                  {card.title}
                </h2>
                <p className="text-gray-600 dark:text-white leading-relaxed whitespace-pre-line">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop 3D Wing Layout */}
      <div className="hidden lg:block w-full px-8">
        <div
          className="relative w-full max-w-6xl mx-auto h-[400px] flex items-center justify-center"
          style={{ perspective: "2000px" }}
        >
          {/* Left Wing Card */}
          <motion.div
            key={`left-${currentIndex}`}
            className="absolute left-0 w-80 pointer-events-none"
            initial={{ opacity: 0, x: -100, rotateY: 45, scale: 0.8 }}
            animate={{ opacity: 0.5, x: 0, rotateY: 45, scale: 0.85 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="bg-background dark:bg-[#242433] rounded-3xl shadow-xl p-8">
              <h2 className="text-gray-900 font-bold dark:text-white mb-4">
                {cards[getPrevIndex()].title}
              </h2>
              <p className="text-gray-600 dark:text-white text-sm leading-relaxed whitespace-pre-line line-clamp-6">
                {cards[getPrevIndex()].content}
              </p>
            </div>
          </motion.div>

          {/* Center Active Card */}
          <div className="w-full max-w-xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    paginate(1);
                  } else if (swipe > 10000) {
                    paginate(-1);
                  }
                }}
                className="w-full"
              >
                <div className="bg-background dark:bg-[#242433] rounded-3xl shadow-2xl p-10 cursor-grab active:cursor-grabbing">
                  <h2 className="text-gray-900 font-bold dark:text-white mb-6">
                    {cards[currentIndex].title}
                  </h2>
                  <p className="text-gray-600 dark:text-white leading-relaxed whitespace-pre-line">
                    {cards[currentIndex].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Wing Card */}
          <motion.div
            key={`right-${currentIndex}`}
            className="absolute right-0 w-80 pointer-events-none"
            initial={{ opacity: 0, x: 100, rotateY: -45, scale: 0.8 }}
            animate={{ opacity: 0.5, x: 0, rotateY: -45, scale: 0.85 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="bg-background dark:bg-[#242433] rounded-3xl shadow-xl p-8">
              <h2 className="text-gray-900 mb-4">
                {cards[getNextIndex()].title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line line-clamp-6">
                {cards[getNextIndex()].content}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-12">
        <motion.button
          onClick={() => {
            paginate(-1);
            scrollToCard(getPrevIndex());
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                scrollToCard(index);
              }}
              className="relative"
            >
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gray-800 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>

        <motion.button
          onClick={() => {
            paginate(1);
            scrollToCard(getNextIndex());
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </motion.button>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
