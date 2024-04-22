import { useWallet } from "@solana/wallet-adapter-react";
import type { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import React, { useCallback, useMemo } from "react";

export const WalletConnectButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, disabled, onClick, ...props }) => {
  const { wallet, connect, connecting, connected } = useWallet();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) connect().catch(() => {});
    },
    [onClick, connect]
  );

  const content = useMemo(() => {
    if (children) return children;
    if (connecting) return "Connecting ...";
    if (connected) return "Connected";
    if (wallet) return "Connect";
    return "Connect Wallet";
  }, [children, connecting, connected, wallet]);

  return (
    <button
      className="hidden lg:block w-41.5 h-11 bg-white_button bg-cover pt-4 text-lg font-lakki"
      disabled={disabled || !wallet || connecting || connected}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};
