"use client";
import { useState , useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import IndexLayout from "@/layouts/indexLayout";
import Ads from "./components/Ads";
import TokenAndChartSection from "./components/sections/tokenAndChartSection";


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

    const { connected } = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <IndexLayout>
      <div className=" md:w-[830px] mx-auto">
        <Ads />
        <TokenAndChartSection/>
      </div>

      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
  
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="w-[90%] max-w-md p-6 bg-black rounded-lg shadow-lg">
            <Dialog.Title className="text-lg font-bold text-primary text-center">Welcome To The Lore</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm font-medium text-white text-center">
            Step into the world of boundless possibilities where tokens tell stories, chats spark connections, and real-time insights drive action. Explore curated token channels, connect with like-minded individuals, and access exclusive content gated by your holdings. 
            The Lore isn’t just a platform—it’s your gateway to a dynamic Web3 experience. Start your journey now by connecting your wallet and diving into the ever-evolving narrative.
            </Dialog.Description>
          <div className="my-4 flex justify-center ">
          <WalletMultiButton
          className="
            !bg-[#C1FF00] 
            !px-6 
            !py-2 
            !rounded-full 
            !text-black 
            !font-medium
            hover:!opacity-90
            !transition-all
            !h-auto
            mt-4
          "
        >
          {mounted && (connected ? "Connected" : "Connect Wallet")}
        </WalletMultiButton>
          </div>
          </Dialog.Panel>
        </div>
      </Dialog> */}

    </IndexLayout>
  );
}
