import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/MobileMenu";
import ConnectButton from "../Wallet";

const menus = [
  {
    label: "Overview",
    path: "/",
  },
  {
    label: "About",
    path: "#",
  },
  {
    label: "Where to Buy",
    path: "#",
  },
  {
    label: "Community",
    path: "#",
  },
  {
    label: "Tokenomics",
    path: "#",
  },
  {
    label: "Airdrop",
    path: "#",
  },
  {
    label: "WhitePaper",
    path: "#",
  },
];

export const Header = () => {
  const pathanme = usePathname();

  return (
    <div className="absolute h-23 md:h-29 left-0 top-0 w-full">
      <div className="h-15 md:h-18 w-full bg-[#0E0E0E99]">
        <div className="max-w-wrapper mx-auto h-15 md:h-18 flex items-center justify-between gap-[108px] px-5 lg:px-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={180}
            height={40}
            className="w-45"
          />
          <div className="hidden lg:flex items-center gap-5 font-clash">
            {menus.map((menu, index) => (
              <Link href={menu.path} key={index}>
                <span
                  className={twMerge(
                    "text-white text-lg",
                    menu.path === pathanme ? "text-[#B030FF]" : ""
                  )}
                >
                  {menu.label}
                </span>
              </Link>
            ))}
          </div>

          <ConnectButton />
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
      <div className="h-8 md:h-10.5 bg-top_alert flex justify-center items-center">
        <p className="font-lakki leading-[1] text-xs md:text-lg mt-4">
          Airdrop Season One ends in 09 days! Join now to earn XP!
        </p>
      </div>
    </div>
  );
};
