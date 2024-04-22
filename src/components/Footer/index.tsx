import { GameIcon, SendIcon, TwitterIcon } from '@/components/icons';
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menus = [
  {
    label: 'Overview',
    path: '/'
  },
  {
    label: 'Where to Buy',
    path: '#'
  },
  {
    label: 'About',
    path: '#'
  },
  {
    label: 'Community',
    path: '#'
  },
  {
    label: 'Tokenomics',
    path: '#'
  },
];

export const Footer = () => {
  const pathanme = usePathname();

  return (
    <div className="lg:border-t border-[#DEDFE1]">
      <div className="max-w-wrapper mx-auto w-full pt-9">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-9">
          <Image src="/logo.png" alt="logo" width={180} height={40} className="w-45" />
          <div className="flex flex-col lg:flex-row items-center gap-7.5 lg:gap-24 font-clash border-t border-[#7460F075] lg:border-0 pt-8 lg:pt-0 w-full mt-8 lg:mt-0">
            {menus.map((menu, index) => (
              <Link href={menu.path} key={index}>
                <span className={twMerge("text-white text-lg", menu.path === pathanme ? 'text-[#B030FF]' : '')}>{menu.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="font-clash text-sm lg:text-[12px] text-white text-center lg:text-right mb-5 border-t border-[#7460F075] lg:border-0 pt-4 lg:pt-0">
          Copyright Choobin © 2024 . All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
