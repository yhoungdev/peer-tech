'use client'
import { Home, Users, PenToolIcon as Tool, FileText, Wallet, UserPlus, Settings, Menu as MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-[#1c1c1c] flex flex-col transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <h1
          className={`text-2xl font-bold text-[#c1ff00] transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Peer.onl
        </h1>
        <h1
          className={`text-2xl font-bold text-[#c1ff00] md:hidden ${
            isOpen ? 'hidden' : 'block'
          }`}
        >
          P
        </h1>
        <MenuIcon
          className="cursor-pointer text-[#c1ff00]"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <nav className="flex-grow">
        <SidebarItem icon={Home} label="Home" isOpen={isOpen} />
        <SidebarItem icon={Users} label="Lobby" isOpen={isOpen} />
        <SidebarItem icon={Tool} label="Tools" isOpen={isOpen} />
        <SidebarItem icon={FileText} label="Docs" isOpen={isOpen} />
        <SidebarItem icon={Wallet} label="Wallet" isOpen={isOpen} />
        <SidebarItem icon={UserPlus} label="Refer" isOpen={isOpen} />
      </nav>

      <div className="p-4">
        <SidebarItem icon={Settings} label="Settings" isOpen={isOpen} />
      </div>
    </div>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  isOpen,
}: {
  icon: any;
  label: string;
  isOpen: boolean;
}) {
  return (
    <Link
      href="#"
      className="flex items-center p-4 hover:bg-[#2c2c2c] transition-colors"
    >
      <Icon className="h-5 w-5 text-[#c1ff00]" />
      <span
        className={`ml-4 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 hidden'
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
