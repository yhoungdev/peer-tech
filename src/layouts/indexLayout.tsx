"use client";
import Navbar from "@/app/components/Navbar";
import DaoTokenData from "@/app/components/DaoTokenData";
import GroupsCard from "@/app/components/GroupsCard";
import Image from "next/image";
import { ReactNode } from "react";
import { MiniButton } from "@/app/components/ui/button";
import { Style } from "@/styles";
import { FaPlus } from "react-icons/fa";
import UnclaimedGroup from "@/app/components/unclaimedGroup";

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

            <UnclaimedGroup/>
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
