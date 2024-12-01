export default function ChatInput() {
  return (
    <div className="">
      <div className="flex items-center gap-3 bg-zinc-800/80 rounded-full px-4 py-2">
        <button className="p-2">
          <div className="w-6 h-6 bg-[#9eff65] rounded-md flex items-center justify-center">
            <span className="text-black text-lg">🎁</span>
          </div>
        </button>
        <input
          type="text"
          placeholder="Say GMGL...."
          className="flex-1 bg-transparent outline-none text-sm text-zinc-400 placeholder-zinc-600"
        />
        <button className="p-2">
          <div className="w-6 h-6 text-zinc-400">
            <span className="transform rotate-45">✈️</span>
          </div>
        </button>
      </div>
    </div>
  );
}
