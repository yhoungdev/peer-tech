export default function ChatInterface() {
    return (
        <div className="min-h-screen text-white flex flex-col">
            {/* Chat Messages Container */}
            <div className="flex-1 p-4 space-y-6 overflow-y-auto">
                {/* Message with Avatar */}
                <div className="flex items-start gap-3">
                    <div className="relative">
                        <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#9eff65] rounded-full text-[10px] flex items-center justify-center text-black font-medium">
              0g
            </span>
                    </div>
                    <div className="bg-[#2a2a2a] rounded-2xl px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Just sold my fridge to ape into this token...</p>
                        <p className="text-sm">If this doesn't 100x,</p>
                        <p className="text-sm">I'm eating ice soup for dinner tonight</p>
                    </div>
                </div>

                {/* System Message - Join */}
                <div className="flex justify-center">
                    <span className="text-[#9eff65] text-sm">Ethisluv joined chat</span>
                </div>

                {/* Second Message */}
                <div className="flex items-start gap-3">
                    <div className="relative">
                        <img
                            src="/placeholder.svg?height=40&width=40"
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

                {/* Third Message */}
                <div className="flex items-start gap-3">
                    <div className="relative">
                        <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Avatar with hat"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                    <div className="bg-[#2a2a2a] rounded-2xl px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Yooooo, i'm Jaded af</p>
                    </div>
                </div>

                {/* System Message - Left */}
                <div className="flex justify-center">
                    <span className="text-[#ff4444] text-sm">Mitch Left</span>
                </div>

                {/* System Message - Joined */}
                <div className="flex justify-center">
                    <span className="text-[#9eff65] text-sm">Itachi Joined</span>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-zinc-800">
                <div className="flex items-center gap-3 bg-[#2a2a2a] rounded-full px-4 py-2">
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
        </div>
    )
}

