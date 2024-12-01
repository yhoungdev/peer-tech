export default function ChatInterface() {
  return (
    <div className="  text-white flex flex-col">
      <div className="flex-1 p-4 space-y-6 ">
        <div className="flex items-start gap-3">
          <div className="relative">
            <img
              src="https://api.dicebear.com/9.x/initials/svg?seed=Felix"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#9eff65] rounded-full text-[10px] flex items-center justify-center text-black font-medium">
              0g
            </span>
          </div>
          <div className="bg-[#2a2a2a] rounded-2xl px-4 py-2 max-w-[80%]">
            <p className="text-sm">
              Just sold my fridge to ape into this token...
            </p>
            <p className="text-sm">If this doesn't 100x,</p>
            <p className="text-sm">I'm eating ice soup for dinner tonight</p>
          </div>
        </div>

        <div className="flex justify-center">
          <span className="text-[#9eff65] text-sm">Ethisluv joined chat</span>
        </div>

        <div className="flex items-start gap-3">
          <div className="relative">
            <img
              src="https://api.dicebear.com/9.x/initials/svg?seed=Felix"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#9eff65] rounded-full text-[10px] flex items-center justify-center text-black font-medium">
              0g
            </span>
          </div>
          <div className="bg-[#2a2a2a] rounded-2xl px-4 py-2 max-w-[80%]">
            <p className="text-sm">Wagwan Ply & @Ethisluv</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="relative">
            <img
              src="https://api.dicebear.com/9.x/initials/svg?seed=Felix"
              alt="Avatar with hat"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="bg-[#2a2a2a] rounded-2xl px-4 py-2 max-w-[80%]">
            <p className="text-sm">Yooooo, i'm Jaded af</p>
          </div>
        </div>

        <div className="flex justify-center">
          <span className="text-[#ff4444] text-sm">Mitch Left</span>
        </div>

        <div className="flex justify-center">
          <span className="text-[#9eff65] text-sm">Itachi Joined</span>
        </div>
      </div>
    </div>
  );
}
