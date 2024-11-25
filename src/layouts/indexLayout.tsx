"use client";
import Navbar from "@/app/components/Navbar";
import DaoTokenData from "@/app/components/DaoTokenData";
import GroupsCard from "@/app/components/GroupsCard";
import Image from "next/image";
import { ReactNode } from "react";
import { MiniButton } from "@/app/components/ui/button";
import { Style } from "@/styles";
import { FaPlus } from "react-icons/fa";

interface Iprops {
  children: ReactNode;
}
export default function IndexLayout({ children }: Iprops) {
  return (
    <div className="min-h-screen ">
      <div className="rightcontents relative">
        <div className="relative z-10">
          <DaoTokenData />
          <div className="flex gap-10  ">
            <div className="flex-1 px-[3em]">{children}</div>
          </div>

          <div className="mt-4  ">
            <h3
              className="px-4 mb-4"
              style={{
                color: "gray",
              }}
            >
              Unclaimed Groups
            </h3>
            <div
              className="flex w-full my-4 flex-wrap items-center  "
              style={{
                gap: "3em",
                marginLeft: "1em",
              }}
            >
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center
                 bg-[#1E1E1E] justify-between
                  py-4 px-4  rounded-[30px] relative"
                  style={{
                    border: "1px solid #C9FF17",
                    width: "200px",
                    ...Style.groudCard,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full"
                    style={{
                      backgroundImage: `url(https://dd.dexscreener.com/ds-data/tokens/solana/8Ejsp5qyuBgGZxZ3Zv44cmjqfkhdTjPB54DhPMZUpump.png?size=lg&key=7da0a1)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div>
                    <h3 className="flex-1 text-lg font-semibold ml-4 text-white">
                      WIFs
                    </h3>
                  </div>

                  <div
                    className="relative "
                    style={{
                      left: "2em",
                    }}
                  >
                    <MiniButton>
                      <div className="flex items-center gap-2">
                        <p>Claim</p>
                        <FaPlus size={"10px"} />
                      </div>
                    </MiniButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
          absolute 
          right-[20%]
          top-[70%] 
          -translate-y-1/2 
          z-[5]
          pointer-events-none
          w-[500px]
          h-[500px]
          mix-blend-screen
          opacity-40
        "
        >
          <Image
            src="/gradient.png"
            alt="Gradient Effect"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
