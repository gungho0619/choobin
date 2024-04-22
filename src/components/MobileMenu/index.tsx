import { MenuIcon } from '@/components/icons';
import { useState } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react'
import BaseDialog from '@/components/BaseDialog';
import Image from 'next/image';

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
  {
    label: 'Airdrop',
    path: '#'
  },
  {
    label: 'WhitePaper',
    path: '#'
  },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <MenuIcon onClick={() => setIsOpen(true)} />
      <BaseDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="w-screen h-screen rounded-none bg-main px-0 py-0 bg-introduce bg-cover"
      >
        <div>
          <div className="flex justify-center mt-5 mb-5">
            <button className="focus:outline-none w-41.5 h-11 bg-white_button bg-cover pt-4 text-lg font-lakki">Connect Wallet</button>
          </div>
          <div>
            {menus.map((menu, index) => (
              <div key={index} className="text-white text-lg text-center mb-4">
                {menu.label}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Image src="/images/unicon_blur.png" alt="" className="w-48" width={193} height={177} />
          </div>
        </div>
      </BaseDialog>
    </div>
  );
};

