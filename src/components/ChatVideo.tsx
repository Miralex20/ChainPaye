"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ArrowLeft, Wifi, Battery } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Message {
  text: string;
  sent: boolean;
  time: string;
  link?: {
    url: string;
    title: string;
    description?: string;
  };
  copyButton?: {
    text: string;
  };
}

const messages: Message[] = [
  {
    text: "Generate payment link for Rayford Steele for $500",
    sent: true,
    time: "08:20",
  },
  {
    text: "Payment link for $500 has been generated for Rayford Steele",
    sent: false,
    time: "08:24",
    copyButton: {
      text: "Copy payment link",
    },
  },
  {
    text: "Payment Received\n\n$500 received from Rayford Steele successfully\n\nOld Balance: $200\nNew Balance: $700",
    sent: false,
    time: "08:27",
  },
  {
    text: `Type /withdraw to automatically convert and withdraw to your bank account`,
    sent: false,
    time: "08:27",
  },
  {
    text: "/withdraw",
    sent: true,
    time: "08:28",
  },
  {
    text: "Withdrawal Successful\n\n$500 - ₦725,000 has been successfully withdrawn to your bank account",
    sent: false,
    time: "08:29",
  },
];

export default function ChatVideo() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < messages.length) {
      const nextMessage = messages[currentIndex];
      const isReceivedMessage = !nextMessage.sent;

      const timeout = setTimeout(
        () => {
          setVisibleMessages((prev) => [...prev, messages[currentIndex]]);
          setCurrentIndex((prev) => prev + 1);
        },
        currentIndex === 0 ? 500 : isReceivedMessage ? 2000 : 1200
      );

      return () => clearTimeout(timeout);
    } else if (currentIndex === messages.length) {
      // Restart the conversation after a delay
      const restartTimeout = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
      }, 2000);

      return () => clearTimeout(restartTimeout);
    }
  }, [currentIndex]);

  return (
    <div className=" flex items-center justify-center relative w-7xl pointer-events-none h-[377px] overflow-visible mt-2 lg:mb-24 rounded-t-3xl lg:h-[654px]">
      {/* Phone Frame */}
      <div className="z-10">
        <div className="relative w-[280px] h-[425px] lg:h-[708px] lg:w-[443px] object-cover overflow-hidden mb-12 lg:inset-1">
          <Image
            src="/images/phoneFrame.png"
            alt="Phone frame"
            className="absolute inset-0  object-fit pointer-events-none z-20"
            width={430}
            height={708}
          />

          {/* Chat Content */}
          <div className="absolute top-[20px] left-[14px] right-[14px] bottom-0 flex flex-col overflow-hidden rounded-t-[48px] bg-white">
            {/* Status Bar */}
            <div className="px-6 lg:px-12 lg:pt-4 lg: flex items-center justify-between text-black font-bold text-xs">
              <div>19:14</div>
              <div className="flex items-center gap-1.5">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path
                    d="M16.5 0h-1.8c-.9 0-1.65.75-1.65 1.65v8.7c0 .9.75 1.65 1.65 1.65h1.8c.9 0 1.5-.75 1.5-1.65v-8.7c0-.9-.6-1.65-1.5-1.65zm-1.8 9.75v-7.5m1.8 7.5v-7.5M10.5 1.5h-1.8c-.9 0-1.65.75-1.65 1.65v5.7c0 .9.75 1.65 1.65 1.65h1.8c.9 0 1.5-.75 1.5-1.65v-5.7c0-.9-.6-1.65-1.5-1.65zm-1.8 7.5v-5.7m1.8 5.7v-5.7M4.5 3h-1.8c-.9 0-1.65.75-1.65 1.65v2.7c0 .9.75 1.65 1.65 1.65h1.8c.9 0 1.5-.75 1.5-1.65v-2.7c0-.9-.6-1.65-1.5-1.65zm-1.8 4.5v-2.7m1.8 2.7v-2.7"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="currentColor"
                  />
                </svg>
                <Wifi className="w-4 h-4" strokeWidth={2.5} />
                <Battery className="w-5 h-5" strokeWidth={2.5} />
              </div>
            </div>

            {/* Chat Header */}
            <div className="bg-white text-black font-bold px-2 pt-2 lg:py-4 lg:gap-4 gap-1 flex items-center border-b border-gray-100">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-xs">23</span>
              <div className="w-8 h-8 rounded-md overflow-hidden  shrink-0">
                <Image
                  src="/images/logoMain.png"
                  alt="ChainPaye"
                  className="w-full h-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex-1 text-xs">
                <div>Chainpaye</div>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-hidden lg:px-6 px-2 bg-[url('/images/whatsappScreen.png')] flex flex-col justify-end lg:justify-start font-bold text-xs">
              <motion.div
                className="flex flex-col justify-end lg:justify-start text-bold"
                layout
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <AnimatePresence mode="popLayout">
                  {visibleMessages.map((message, index) => (
                    <ChatMessage
                      key={index}
                      text={message.text}
                      sent={message.sent}
                      time={message.time}
                      link={message.link}
                      copyButton={message.copyButton}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
