"use client";

import { motion } from "motion/react";
import { CheckCheck, Link as LinkIcon, Copy } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/imageWithFallback";
import { useState } from "react";

interface ChatMessageProps {
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

const PROFILE_PHOTO = "/images/logoMain.png";

export function ChatMessage({
  text,
  sent,
  time,
  link,
  copyButton,
}: ChatMessageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Simulate copying to clipboard
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.8 }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      layout
      className={`flex ${
        sent ? "justify-end" : "justify-start"
      } mb-1 font-semibold`}
    >
      {/* Profile Photo for received messages */}
      {!sent && (
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-auto mb-1">
          <ImageWithFallback
            src={PROFILE_PHOTO}
            alt="ChainPaye"
            className="w-full h-full object-cover bg-white border-2 rounded-full"
          />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-lg px-3 pt-2 shadow-sm ${
          sent ? "bg-[#DCF8C6] rounded-br-sm" : "bg-white rounded-bl-sm"
        }`}
      >
        <p className="text-gray-800">{text}</p>

        {/* Copy Button */}
        {copyButton && (
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 mt-3 px-3 pt-2 bg-white border-t rounded-t-md hover:bg-gray-50 transition-colors w-full justify-center text-green-600"
          >
            <motion.div
              animate={copied ? { rotate: 360 } : {}}
              transition={{ duration: 0.3 }}
            >
              <Copy className="w-4 h-4" />
            </motion.div>
            <span>{copied ? "Copied!" : copyButton.text}</span>
          </motion.button>
        )}

        {/* Link Preview */}
        {link && (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 border border-gray-300 rounded-md overflow-hidden hover:bg-gray-50 transition-colors"
          >
            <div className="p-3 bg-gray-50">
              <div className="flex items-start gap-2">
                <LinkIcon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-blue-600 truncate">{link.title}</div>
                  {link.description && (
                    <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                      {link.description}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mt-1 truncate">
                    {link.url}
                  </div>
                </div>
              </div>
            </div>
          </a>
        )}

        <div
          className={`flex items-center gap-1 justify-end mt-1 ${
            sent ? "text-gray-600" : "text-gray-500"
          }`}
        >
          <span className="text-[11px]">{time}</span>
          {sent && (
            <CheckCheck className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
          )}
        </div>
      </div>
    </motion.div>
  );
}
