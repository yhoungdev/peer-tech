"use client";
import Image from "next/image";

export default function GroupsCard() {
  const groups = [
    {
      id: 1,
      name: "Catana (CTO)",
      count: "156",
      time: "6:45pm",
      image:
        "https://dd.dexscreener.com/ds-data/tokens/solana/4Ka7RcmhK7MXzN17mtH68RtBr17YBZmEcWX4m7Lrpump.png?size=lg&key=2ccadf",
    },
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
    {
      id: 5,
      name: "Pump 5",
      image:
        "https://dd.dexscreener.com/ds-data/tokens/solana/3y5yzZHhgfTzrkg3xf9TLucWRxWBC3o6iDutyTonpump.png?size=lg&key=dac900",
      count: "2.3k",
      time: "6:45pm",
    },
    {
      id: 6,
      name: "Pump 6",
      image:
        "https://dd.dexscreener.com/ds-data/tokens/solana/ENaL5cX5Z8AUPx4qf7y1xDL4NainmsbmgXDz5jaXpump.png?size=lg&key=f3384d",
      count: "2.59k",
      time: "6:45pm",
    },
    {
      id: 7,
      name: "Pump 7",
      image:
        "https://dd.dexscreener.com/ds-data/tokens/solana/APfYrsmioST7R2pdBLfTWi9f1gmgrtDAvJJnUnMWpump.png?size=lg&key=a69105",
      count: "2.1k",
      time: "6:45pm",
    },
    {
      id: 8,
      name: "Pump 8",
      image:
        "https://dd.dexscreener.com/ds-data/tokens/solana/AXe5hPtdQrPkTrp7PLQMWiuKZQ5PLoXNqTVQci1Rpump.png?size=lg&key=8e028d",
      count: "156",
      time: "6:45pm",
    },
  ];



  return (
    <div
      className="
      w-[300px] 
      h-[600px]
      bg-[#0F0E0E]
      rounded-[10px] 
      border 
      border-[#C9FF17] 
      p-4
      flex
      flex-col
      mr-5
      shadow-[0_0_15px_rgba(201,255,23,0.1),_-4px_0_10px_rgba(201,255,23,0.05),_0_4px_6px_rgba(0,0,0,0.3)]
    "
    >
      <h2 className="text-[#C1FF00] text-[30px] font-medium mb-4">Groups</h2>

      <div
        className="
        flex 
        flex-col 
        gap-3 
        overflow-y-auto 
        [&::-webkit-scrollbar]:w-0.5
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-[#C9FF17]/50
        [&::-webkit-scrollbar-thumb]:hover:bg-[#C9FF17]
        hover:[&::-webkit-scrollbar-thumb]:bg-[#C9FF17]
        pr-1
      "
      >
        {groups.map((group) => (
          <div
            key={group.id}
            className={`
              flex 
              items-center 
              justify-between 
              p-3
              border-b
              w-full
              border-[#2C2C2C]
              ${group.id === groups.length ? "border-b-0" : ""}
            `}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className=" w-full h-[40px] rounded-full overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-medium">{group.name}</h3>
                  {group.id % 2 === 0 && (
                    <Image
                      src="/bell.png"
                      alt="Notifications Silenced"
                      width={16}
                      height={16}
                    />
                  )}
                </div>
                <p className="text-[#C1FF00] text-sm">ash is typing</p>
              </div>
            </div>

            <div className="flex flex-col items-center w-[36px]">
              <span className="text-white/60 text-xs mb-1">{group.time}</span>
              <div
                className="
                bg-[#C1FF00] 
                text-black 
                text-[14px]
                font-medium 
                w-[36px]
                h-[18px]
                rounded-[30px]
                flex
                items-center
                justify-center
              "
              >
                {group.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
