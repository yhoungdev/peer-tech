import React from 'react';
import {Style} from "@/styles";
import {MiniButton} from "@/app/components/ui/button";
import {FaPlus} from "react-icons/fa";

function GroupItems() {
    return (
        <div
            className="flex items-center bg-[#1E1E1E] justify-between py-4 px-4 rounded-[30px] relative m-4"
            style={{
                border: "1px solid #C9FF17",
                width: "300px",
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

            <div className="relative" style={{left: "2em"}}>
                <MiniButton>
                    <div className="flex items-center gap-2">
                        <p>Claim</p>
                        <FaPlus size={"10px"}/>
                    </div>
                </MiniButton>
            </div>
        </div>
    );
}

export default GroupItems;
