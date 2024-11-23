import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function GroupsList() {
  return (
    <div className="w-64 bg-[#1c1c1c] p-4 overflow-auto hidden lg:block">
      <Card className="bg-[#2c2c2c] mb-4">
        <CardHeader>
          <CardTitle className="text-[#c1ff00]">Groups</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="" alt="Group" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="font-medium">Catana (CTO)</div>
                  <div className="text-xs text-gray-500">ash is typing</div>
                </div>
              </div>
              <div className="text-xs text-[#c1ff00]">{(i + 1) * 100}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-[#2c2c2c]">
        <CardHeader>
          <CardTitle className="text-[#c1ff00]">Unclaimed Groups</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {['$Wif', '$Trump', '$Ansem', '$Bonk'].map((name) => (
            <div key={name} className="flex items-center justify-between bg-[#1c1c1c] p-2 rounded">
              <div className="flex items-center space-x-2">
                <img src="" alt="Group" className="w-6 h-6 rounded-full" />
                <span>{name}</span>
              </div>
              <Button size="sm" variant="outline" className="bg-[#c1ff00] text-black hover:bg-[#a1df00]">
                Claim +
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

