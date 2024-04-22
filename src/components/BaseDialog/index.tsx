import { Dialog, Transition } from '@headlessui/react'
import { Fragment, PropsWithChildren } from 'react'
import { CloseIcon } from '@/components/icons';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const BaseDialog = ({ isOpen, onClose, className, children }: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
      
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={twMerge("w-full transform overflow-hidden rounded-2xl p-8 text-left align-middle shadow-xl transition-all", className)}>
                <div className="bg-[#0E0E0E60] h-screen">
                  <div className="px-5 flex justify-between h-15 items-center bg-[#0E0E0E99]">
                    <Image src="/logo.png" alt="logo" width={180} height={40} className="w-45" />
                    <CloseIcon onClick={onClose} className="w-5 h-5" />
                  </div>
                  <div className="bg-top_alert">
                    <div className="h-8 md:h-10.5 bg-[#0E0E0E60] flex justify-center items-center">
                      <p className="font-lakki leading-[1] text-xs md:text-lg mt-4">
                        Airdrop Season One ends in 09 days! Join now to earn XP!
                      </p>
                    </div>
                  </div>
  
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
};

export default BaseDialog;
