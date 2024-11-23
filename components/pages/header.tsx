import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#1c1c1c]">
      <div className="flex-grow max-w-md">
        <Input type="search" placeholder="Search..." className="w-full bg-[#2c2c2c] border-none" />
      </div>
      <div className="flex items-center space-x-2 ml-4">
        <Button variant="outline" className="bg-[#c1ff00] text-black hover:bg-[#a1df00]">3vEnv</Button>
        <Button variant="outline" className="bg-[#c1ff00] text-black hover:bg-[#a1df00]">Connected</Button>
      </div>
    </header>
  )
}

