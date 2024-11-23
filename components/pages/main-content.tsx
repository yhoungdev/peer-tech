import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function MainContent() {
  return (
    <div className="flex-grow overflow-auto p-4">
      <Card className="mb-4 bg-[#c1ff00] text-black">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="" alt="Mascot" className="w-24 h-24" />
            <div>
              <CardTitle className="text-3xl font-bold">TUZKI ON SOL</CardTitle>
            </div>
          </div>
          <Button variant="secondary" className="bg-black text-white hover:bg-gray-800">Apply For Ads</Button>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-[#2c2c2c]">
        <CardHeader>
          <CardTitle className="text-[#c1ff00]">Top 10 tokens (24hr)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Token</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <img src="/placeholder.svg?height=24&width=24" alt="Token" className="w-6 h-6 rounded-full" />
                      <span>Token {i + 1}</span>
                    </div>
                  </TableCell>
                  <TableCell>$0.1234</TableCell>
                  <TableCell className="text-green-500">+5.67%</TableCell>
                  <TableCell>1,234,567</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" className="mr-2">Short</Button>
                    <Button size="sm" variant="outline">Buy</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="bg-[#2c2c2c]">
        <CardContent className="p-0">
          <img src="/placeholder.svg?height=300&width=600" alt="Chart" className="w-full h-64 object-cover" />
        </CardContent>
      </Card>
    </div>
  )
}

