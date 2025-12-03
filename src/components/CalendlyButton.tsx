"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  calendlyUrl: string;
  text?: string;
}

export default function CalendlyButton({
  calendlyUrl,
  text = "Book a call",
  ...props
}: Props) {
  const handleClick = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button onClick={handleClick} {...props}>
      {props.children || text}
    </button>
  );
}
