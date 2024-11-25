export default function Ads() {
  return (
    <div
      className="
      w-full  
      h-[157px]  
      bg-[#C1FF00] 
      rounded-[30px]
      relative 
     
    "
    >
      <div
        className="
        flex 
        items-center 
        justify-between 
        h-full 
        px-8
        relative
        z-10
      "
      >
        <div
          className="w-[200px] h-[170px] relative -top-2"
          style={{
            backgroundImage: "url(/bunny-left.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="
          flex 
          flex-col 
          items-center 
          gap-3
          mx-auto
          z-20
        "
        >
          <h2
            className="
            text-black 
            text-xl
            font-bold 
            tracking-wider
            font-['Jersey_10']
          "
          >
            TUZKI ON SOL
          </h2>
          <button
            className="
            bg-black 
            text-white 
            px-6 
            py-1.5
            rounded-full
            hover:opacity-90
            transition-all
            font-['Jersey_10']
            text-sm
          "
          >
            Apply For Ads
          </button>
        </div>

        <div
          className="w-[200px] h-[170px] relative -top-1"
          style={{
            backgroundImage: "url(/bunny-right.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
