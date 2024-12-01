const CopyIcon = () => {
  return (
    <svg
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00029 2.08525L1 8.5C1 9.82548 2.03154 10.91 3.33562 10.9947L3.5 11L7.9144 11.0007C7.70828 11.5829 7.15285 12 6.5 12H3C1.34315 12 0 10.6569 0 9V3.5C0 2.84678 0.417543 2.29109 1.00029 2.08525ZM8.5 0C9.32843 0 10 0.671573 10 1.5V8.5C10 9.32843 9.32843 10 8.5 10H3.5C2.67157 10 2 9.32843 2 8.5V1.5C2 0.671573 2.67157 0 3.5 0H8.5Z"
        fill="#C9FF17"
      />
    </svg>
  );
};
export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between w-full py-2 mb-[2em] px-4 border-b-4 pb-4 border-gray-600/20">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src="https://api.dicebear.com/9.x/initials/svg?seed=Tife"
            alt="Profile"
            className="h-12 w-12 rounded-full border-2 border-zinc-700"
          />
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 ring-2 ring-black" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Catana (CTO)</span>
          <CopyIcon />
        </div>
      </div>

      <div className="relative flex items-center">
        <div className="flex items-center rounded-xl py-2 bg-[#c1ff00] pr-4">
          <div className="flex items-center gap-3 pl-4">
            <img
              src="/bunny-right.png"
              alt="Tuzki character"
              className="h-10 w-10"
            />
            <span className="font-bold uppercase tracking-wider">
              Tuzki on Sol
            </span>
          </div>
          <button className="ml-4 rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
            Apply for AOS
          </button>
        </div>
      </div>
    </div>
  );
}
