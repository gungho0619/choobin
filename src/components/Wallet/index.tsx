import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import React, {
  ButtonHTMLAttributes,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { WalletConnectButton } from "./WalletConnectButton";
import { WalletModalButton } from "./WalletModalButton";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const ConnectButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { publicKey, wallet, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const content = useMemo(() => {
    if (children) return children;
    if (!wallet || !base58) return null;
    return base58.slice(0, 5) + "..." + base58.slice(-5);
  }, [children, wallet, base58]);

  const openDropdown = useCallback(() => {
    setActive(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setActive(false);
  }, []);

  const openModal = useCallback(() => {
    setVisible(true);
    closeDropdown();
  }, [setVisible, closeDropdown]);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;

      // Do nothing if clicking dropdown or its descendants
      if (!node || node.contains(event.target as Node)) return;

      closeDropdown();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, closeDropdown]);

  if (!wallet)
    return <WalletModalButton {...props}>{children}</WalletModalButton>;
  if (!base58)
    return <WalletConnectButton {...props}>{children}</WalletConnectButton>;

  return (
    <div className="relative">
      <button
        className="hidden lg:block w-41.5 h-11 bg-white_button bg-cover pt-4 text-lg font-lakki"
        style={{ pointerEvents: active ? "none" : "auto", ...props.style }}
        onClick={openDropdown}
      >
        {content}
      </button>
      <div
        ref={ref}
        className={twMerge(
          "absolute w-full mt-2 cursor-pointer flex-col gap-4 text-sm",
          active ? "flex" : "hidden"
        )}
      >
        <Image
          src="/images/small_widget.png"
          alt="widget"
          width={225}
          height={111}
          className="w-full absolute h-full"
        />
        <div className="relative z-10 w-full p-2 md:p-4">
          <ul
            aria-label="dropdown-list"
            className="w-full cursor-pointer flex flex-col gap-2"
            role="menu"
          >
            <li
              onClick={openModal}
              className="relative h-auto w-auto"
              role="menuitem"
            >
              <div className="relative w-[135px] h-[32px] flex items-center justify-center">
                <Image
                  src="/images/pink_input.png"
                  alt=""
                  fill
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="relative z-10 pt-1">
                  <span className="font-lakki text-sm">Change wallet</span>
                </div>
              </div>
            </li>
            <li
              onClick={disconnect}
              className="relative h-auto w-auto"
              role="menuitem"
            >
              <div className="relative w-[135px] h-[32px] flex items-center justify-center">
                <Image
                  src="/images/pink_input.png"
                  alt=""
                  fill
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="relative z-10 pt-1">
                  <span className="font-lakki text-sm">Disconnect</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConnectButton;
