import { FaTwitter, FaGlobe, FaTelegram } from "react-icons/fa";
import { MiniButton } from "../ui/button";

import React from "react";
import Image from "next/image";

interface IProps {
  name?: string;
  src: string;
}

const DataDisplay = () => {
  return (
    <div className=" text-white p-4 rounded-md">
      <div className="grid grid-cols-5  text-center">
        <div className="text-sm font-bold uppercase">Price</div>
        <div className="text-sm font-bold uppercase">MC</div>
        <div className="text-sm font-bold uppercase">Vol</div>
        <div className="text-sm font-bold uppercase">Holders</div>
        <div className="text-sm font-bold uppercase">Age</div>

        <div className="text-lime-400 font-bold">0.003</div>
        <div className="text-lime-400 font-bold">$22m</div>
        <div className="text-red-500 font-bold">$102m</div>
        <div className="text-lime-400 font-bold">13,000</div>
        <div className="text-lime-400 font-bold">13D</div>
      </div>
    </div>
  );
};

const TokenPanel = ({ src, name }: IProps) => {
  return (
    <div
      className="mb-4"
      style={{
        borderBottom: "1px solid gray",
      }}
    >
      <div className="flex gap-2 items-center ">
        <div
          className="w-10 h-10 rounded-full"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div>
          <h4 className="text-white">{name}</h4>
          <div className="flex items-center gap-2 text-primary">
            <FaTelegram />
            <FaTwitter />
            <FaGlobe />
          </div>
        </div>
      </div>

      <div>
        <div className="gap-4 items-center flex ">
          <div>
            <DataDisplay />
          </div>
          <MiniButton>Join</MiniButton>
          <MiniButton>Buy</MiniButton>
        </div>
      </div>
    </div>
  );
};

export default TokenPanel;
