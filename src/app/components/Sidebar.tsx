"use client";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const menuItems = [
    {
      icon: "/icons/home.png",
      text: "Home",
      href: "/",
      isActive: true,
    },
    {
      icon: "/icons/lobby.png",
      text: "Lobby",
      href: "/lobby",
    },
    {
      icon: "/icons/tools.png",
      text: "Tools",
      href: "/tools",
    },
    {
      icon: "/icons/docs.png",
      text: "Docs",
      href: "/docs",
    },
    {
      icon: "/icons/wallet.png",
      text: "Wallet",
      href: "/wallet",
    },
    {
      icon: "/icons/refer.png",
      text: "Refer",
      href: "/refer",
    },
  ];

  return (
    <div
      className={`
      hidden md:block
      ${isOpen ? "w-[100px]" : "w-[220px]"}
      h-screen
      bg-[#0F0E0E]
      shadow-[4px_0_15px_rgba(0,0,0,0.6)]
      z-50
      border-r border-[#1A1A1A]
      transition-all duration-300 ease-in-out
      font-['Jersey_10']
      relative
    `}
    >
      {/* Logo and Hamburger Container */}
      <div
        className={`
        flex items-center
        px-5 pt-6 mb-8
        ${isOpen ? "justify-center" : "justify-between"}
        transition-all duration-300 ease-in-out
      `}
      >
        <h1
          className={`
          text-2xl font-normal text-white
          transition-all duration-300
          ${isOpen ? "hidden" : "block"}
        `}
        >
          Peer.onl
        </h1>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-6 h-5 flex flex-col justify-between cursor-pointer"
        >
          <div
            className={`
            w-6 h-[2px] bg-[#C1FF00]
            transition-all duration-300 ease-in-out
            ${isOpen ? "rotate-45 translate-y-2" : "rotate-0"}
          `}
          />
          <div
            className={`
            w-6 h-[2px] bg-[#C1FF00]
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0" : "opacity-100"}
          `}
          />
          <div
            className={`
            w-6 h-[2px] bg-[#C1FF00]
            transition-all duration-300 ease-in-out
            ${isOpen ? "-rotate-45 -translate-y-2" : "rotate-0"}
          `}
          />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="px-5">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            style={{ margin: "20px 0" }}
            className={`
              flex items-center justify-center
              ${!isOpen && "justify-start"}
              py-3 px-3
              rounded-lg
              transition-all duration-300
              ${
                item.isActive
                  ? "bg-[#1A1A1A] text-[#C1FF00]"
                  : "text-gray-300 hover:text-[#C1FF00] hover:bg-[#1A1A1A]"
              }
            `}
          >
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.text}
                width={20}
                height={20}
                className={`
                  ${item.isActive ? "brightness-0 invert sepia(100%) saturate(10000%) hue-rotate(90deg)" : ""}
                `}
              />
            </div>
            <span
              className={`
              font-normal
              transition-all duration-300
              ${isOpen ? "hidden" : "block ml-3"}
            `}
            >
              {item.text}
            </span>
          </a>
        ))}
      </nav>

      {/* Settings */}
      <div className="px-5 mb-4 mt-auto">
        <a
          href="/settings"
          style={{ margin: "20px 0" }}
          className="
            flex items-center justify-center
            ${!isOpen && 'justify-start'}
            py-3 px-3
            text-gray-300 hover:text-[#C1FF00]
            rounded-lg hover:bg-[#1A1A1A]
            transition-all duration-300
          "
        >
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            <Image
              src="/icons/settings.png"
              alt="Settings"
              width={20}
              height={20}
            />
          </div>
          <span
            className={`
            font-normal
            transition-all duration-300
            ${isOpen ? "hidden" : "block ml-3"}
          `}
          >
            Settings
          </span>
        </a>
      </div>

      {/* Social Links */}
      <div
        className={`
        absolute
        bottom-0
        left-0
        right-0
        flex gap-4 
        justify-center 
        mb-[50px]
        transition-all duration-300
        ${isOpen ? "flex-col items-center" : "flex-row"}
      `}
      >
        <a href="https://t.me/" className="w-[20px] h-[20px]">
          <Image
            src="/icons/telegram.png"
            alt="Telegram"
            width={20}
            height={20}
          />
        </a>
        <a href="https://twitter.com/" className="w-[20px] h-[20px]">
          <Image
            src="/icons/twitter.png"
            alt="Twitter"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  );
}
