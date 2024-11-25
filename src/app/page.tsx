"use client";

import IndexLayout from "@/layouts/indexLayout";
import Ads from "./components/Ads";
import TokenPanel from "./components/misc/tokenPanel";
import { Fragment, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const data = [
  {
    id: 2,
    name: "Pump 2",
    image:
      "https://dd.dexscreener.com/ds-data/tokens/solana/8Ejsp5qyuBgGZxZ3Zv44cmjqfkhdTjPB54DhPMZUpump.png?size=lg&key=7da0a1",
    count: "129",
    time: "6:45pm",
  },
  {
    id: 3,
    name: "Pump 3",
    image:
      "https://dd.dexscreener.com/ds-data/tokens/solana/2J5Dpp57RsjLBkJrEvyrAQpg8qWvgadUeJR4Ln7bpump.png?size=lg&key=f3edfa",
    count: "157",
    time: "6:45pm",
  },
  {
    id: 4,
    name: "Pump 4",
    image:
      "https://dd.dexscreener.com/ds-data/tokens/solana/22Xeo6diWfJrScaoVFzgkwzrCByPukK45fdwkJyrpump.png?size=lg&key=5720c9",
    count: "234",
    time: "6:45pm",
  },
];

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
      <div className=" w-[850px] mx-auto">
        <Ads />

        <h3 className="text-gray-600 mt-4">Top 10 Tokens (24hrs)</h3>
        <div className="flex items-center h-[455px] gap-4 justify-center mt-4">
          <div className=" px-4 py-4  bg-[#1E1E1E] rounded-[2em] ">
            <div>
              {data.map((items) => (
                <Fragment key={items.id}>
                  <TokenPanel src={items?.image} name={items?.name} />
                </Fragment>
              ))}
            </div>
          </div>
          <div
            className="w-[60%]  h-full bg-[#1E1E1E] rounded-2xl"
            style={{
              backgroundImage: "url(/images/chart.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
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
      </Dialog>

    </IndexLayout>
  );
}
