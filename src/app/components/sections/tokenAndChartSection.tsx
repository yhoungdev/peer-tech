import React, { useEffect, useState, Fragment } from "react";
import TokenPanel from "../misc/tokenPanel";

function TokenAndChartSection() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=solana-ecosystem&order=market_cap_desc&per_page=10&page=1",
        );
        const data = await response.json();
        setTokens(data);
      } catch (error) {
        console.error("Error fetching token data:", error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div>
      <h3 className="text-gray-600 mt-4">Top 10 Tokens (24hrs)</h3>
      <div className="flex items-center gap-4 justify-center mt-4 flex-col md:flex-row">
        <div
          className="w-full md:w-[40%] px-4 py-4 h-[465px] overflow-y-scroll
         bg-[#1E1E1E] rounded-[2em]
          [&::-webkit-scrollbar]:w-0.5
        [&::-webkit-scrollbar-track]:rounded-md
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-md
        [&::-webkit-scrollbar-thumb]:bg-[#C9FF17]/50
        [&::-webkit-scrollbar-thumb]:hover:bg-[#C9FF17]
        hover:[&::-webkit-scrollbar-thumb]:bg-[#C9FF17]"
        >
          <div className="  flex gap-4 flex-col justify-between py-[1em]">
            {tokens.slice(3, 14).map((token) => (
              <Fragment key={token.id}>
                <TokenPanel src={token.image} name={token.name} />
              </Fragment>
            ))}
          </div>
        </div>
        <div
          className="w-full md:w-[60%] h-[465px] bg-[#1E1E1E] rounded-2xl"
          style={{
            backgroundImage: "url(/images/chart.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}

export default TokenAndChartSection;
