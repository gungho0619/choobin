import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import type { ButtonHTMLAttributes, FC, MouseEvent } from "react";
import React, { useCallback } from "react";

export const WalletModalButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children = "Connect Wallet",
  onClick,
  ...props
}) => {
  const { visible, setVisible } = useWalletModal();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) setVisible(!visible);
    },
    [onClick, setVisible, visible]
  );

  return (
    <button
      className="hidden lg:block w-41.5 h-11 bg-white_button bg-cover pt-4 text-lg font-lakki"
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
