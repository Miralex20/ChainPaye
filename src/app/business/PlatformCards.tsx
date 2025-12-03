import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

const platforms = [
  {
    link: "/images/CreditCard.png",
    title: "Fintech platforms & digital banks",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    link: "/images/AddFriend.png",
    title: "Agent & Distributor Networks",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    link: "/images/EmptyCart.png",
    title: "Marketplaces & E-commerce Platforms",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    link: "/images/AppleWallet.png",
    title: "SaaS Tools Managing Customer Wallets",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    link: "/images/ngo.png",
    title: "NGOs & International Organizations",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    link: "/images/CoinsChart.png",
    title: "Investment, Lending & Savings Products",
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
];

function PlatformCard({ platform }: { platform: (typeof platforms)[0] }) {
  const image = platform.link;
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-w-[280px] mx-3 h-[215px] flex flex-col items-start justify-center">
      <div className=" rounded-xl flex items-center justify-center mb-6">
        <Image
          src={image}
          alt={platform.title}
          width={100}
          height={100}
          className="w-[100px] h-[100px]"
        />
      </div>

      <h3 className="text-[20px] font-medium leading-[28px]">
        {platform.title}
      </h3>
    </div>
  );
}

export function PlatformCards() {
  const firstRow = platforms.slice(0, 3);
  const secondRow = platforms.slice(3, 6);

  return (
    <>
      <style>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite alternate;
        }
        
        .animate-scroll-down {
          animation: scroll-down 20s linear infinite alternate;
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite alternate;
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite alternate;
        }
        
        @media (max-width: 1023px) {
          .animate-scroll-up {
            animation: scroll-left 20s linear infinite alternate;
          }
          
          .animate-scroll-down {
            animation: scroll-right 20s linear infinite alternate;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Hero content */}
          <div className="lg:sticky lg:top-24 font-medium px-8">
            <h1 className="text-[38px] leading-[42px] tracking-tight mb-8">
              Built for the Platforms Powering Africa's Digital Economy
            </h1>

            <p className="mb-8 text-[18px] leading-7 ">
              ChainPay supports a wide range of industries helping them move
              money globally and settle locally with ease.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Book a call
              </button>

              <button className="text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right side - Scrolling cards */}
          <div className="space-y-6 overflow-hidden  lg:grid lg:grid-cols-2 lg:gap-6 lg:h-[600px] lg:space-y-0 ">
            {/* First column - scrolling up */}
            <div className="relative overflow-hidden ">
              <div className="flex lg:flex-col animate-scroll-up">
                {[...firstRow, ...firstRow].map((platform, index) => (
                  <PlatformCard key={index} platform={platform} />
                ))}
              </div>
            </div>

            {/* Second column - scrolling down */}
            <div className="relative overflow-hidden ">
              <div className="flex lg:flex-col animate-scroll-down">
                {[...secondRow, ...secondRow].map((platform, index) => (
                  <PlatformCard key={index} platform={platform} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
