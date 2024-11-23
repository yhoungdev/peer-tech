import Image from 'next/image'

export function Banner() {
  return (
    <div className="relative w-full h-[200px] bg-[#CCFF00] rounded-xl overflow-hidden mb-8">
      <div className="absolute inset-0 flex items-center justify-between px-12">
        <Image
          src="/placeholder.svg"
          alt="Tuzki character"
          width={150}
          height={150}
          className="object-contain"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">TUZKI ON SOL</h1>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
            Apply For Ads
          </button>
        </div>
        <Image
          src="/placeholder.svg"
          alt="Tuzki character"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
    </div>
  )
}

