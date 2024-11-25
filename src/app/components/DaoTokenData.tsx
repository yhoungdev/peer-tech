import Image from "next/image";

export default function DaoTokenData() {
  return (
    <div className="border-t border-[#1A1A1A] py-6 px-6">
      {/* Token Stats Row */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8">
            <Image src="/icons/peer.png" alt="PEER" width={32} height={32} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#C1FF00] font-medium">$PEER</span>
              <span className="text-gray-400">Peer Token</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-white">$0.0045</span>
        </div>

        <div>
          <span className="text-white">$2.5M</span>
        </div>

        <div>
          <span className="text-white">$150K</span>
        </div>

        <div>
          <span className="text-[#C1FF00]">+3.34%</span>
        </div>

        <div>
          <span className="text-white">1,000 PEER</span>
        </div>
      </div>
    </div>
  );
}
