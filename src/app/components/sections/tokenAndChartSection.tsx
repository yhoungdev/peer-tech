import { Dialog } from '@headlessui/react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React , { Fragment} from 'react'
import TokenPanel from '../misc/tokenPanel'
import { useWallet } from '@solana/wallet-adapter-react';

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

function TokenAndChartSection() {
  return (
    <div>
         <h3 className="text-gray-600 mt-4">Top 10 Tokens (24hrs)</h3>
        <div className="flex items-center gap-4 justify-center mt-4 flex-col md:flex-row">
          <div className=" w-full md:w-[40%] px-4 py-4 h-[465px] bg-[#1E1E1E] rounded-[2em] ">
            <div>
              {data.map((items) => (
                <Fragment key={items.id}>
                  <TokenPanel src={items?.image} name={items?.name} />
                </Fragment>
              ))}
            </div>
          </div>
          <div
            className=" w-full md:w-[60%] h-[465px] bg-[#1E1E1E] rounded-2xl"
            style={{
              backgroundImage: "url(/images/chart.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
    </div>
  )
}

export default TokenAndChartSection