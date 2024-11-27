"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  const { connected } = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div></div>
      <div className="flex items-center gap-[4em]">
        <div className="relative md:w-[400px]">
          <input
            type="text"
            placeholder="Search......"
            className="
              w-full
              rounded-[10px]
              bg-[#1A1A1A] 
              text-white 
              px-4 
              py-2 
              outline-none 
              border-none
              pr-10
            "
          />
          <div
            className="
            absolute 
            right-3
            top-1/2 
            -translate-y-1/2
            w-5 
            h-5
            cursor-pointer
          "
          >
            <Image src="/searchicon.png" alt="Search" width={20} height={20} />
          </div>
        </div>

        <WalletMultiButton
          className="
            !bg-[#C1FF00] 
            !px-6 
            !py-2 
            !rounded-md 
            !text-black 
            !font-medium
            hover:!opacity-90
            !transition-all
            !h-auto
          "
        >
          {mounted && (connected ? "Connected" : "Connect Wallet")}
        </WalletMultiButton>
      </div>
    </div>
  );
}
