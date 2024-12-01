"use client";

import Card from "@/app/components/ui/card";

export default function CryptoDashboard() {
  return (
    <div className=" p-4">
      <Card className="w-full  md:w-[300px] mx-auto">
        <div className="p-4 space-y-6">
          <div className="h-48 flex items-end">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 L20,30 L40,45 L60,15 L80,35 L100,80"
                fill="none"
                stroke="#ff3333"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="flex justify-between text-xs text-zinc-500">
            <span>30min</span>
            <span>1hr</span>
            <span>6h</span>
            <span>1d</span>
            <span>all</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Market Cap", value: "$256.1M" },
              { label: "Liquidity", value: "$10.92M" },
              { label: "24h vol", value: "$176.09M" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="bg-zinc-800 rounded-xl p-2 flex flex-col items-center justify-center text-center"
              >
                <div className="text-xs text-zinc-400">{metric.label}</div>
                <div className="text-sm font-medium text-white">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-800 rounded-full" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#9eff65] text-sm">pepefund</span>
                    <span className="text-zinc-400 text-sm">secured</span>
                  </div>
                  <div className="text-zinc-500 text-xs">Catana with 70SOL</div>
                </div>
              </div>
              <span className="text-zinc-600 text-sm">3h</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-800 rounded-full" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#ff6565] text-sm">kef.wagmi</span>
                    <span className="text-zinc-400 text-sm">Sold</span>
                  </div>
                  <div className="text-zinc-500 text-xs">
                    Catana with 0.7 SOL
                  </div>
                </div>
              </div>
              <span className="text-zinc-600 text-sm">7h</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-800 rounded-full" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#9eff65] text-sm">0x1ife</span>
                    <span className="text-zinc-400 text-sm">secured</span>
                  </div>
                  <div className="text-zinc-500 text-xs">
                    Catana with 91 SOL
                  </div>
                </div>
              </div>
              <span className="text-zinc-600 text-sm">9h</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
