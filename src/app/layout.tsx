"use client";
import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import GroupsCard from "./components/GroupsCard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen m-0 p-0 bg-[#0F0E0E] font-['Jersey_10']">
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <div className="flex min-h-screen">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

                <div className="flex flex-col flex-grow">
                  <Navbar />
                  <div
                    className="flex flex-grow gap-4 p-4 "
                    style={{
                      background:
                        "radial-gradient(circle at right, #ceea7036 0%, #000000 55%, #000000 100%)",
                    }}
                  >
                    <main className=" w-full md:w-[850px] mx-auto">{children}</main>

                    <aside className="flex-shrink-0 w-80 hidden md:block">
                      <GroupsCard />
                    </aside>
                  </div>
                </div>
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
