import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Solutions",
  description:
    "Empower your business with ChainPaye's global payment solutions. Seamless, secure, and instant transactions on WhatsApp for your enterprise.",
  openGraph: {
    title: "ChainPaye Business - Global Payment Solutions",
    description:
      "Empower your business with ChainPaye's global payment solutions. Seamless, secure, and instant transactions on WhatsApp for your enterprise.",
    url: "https://chainpaye.com/business",
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
