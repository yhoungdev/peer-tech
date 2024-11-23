import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function Groups() {
  const groups = [
    { id: 1, name: 'Catana (CTO)', members: '145', status: 'ash is typing' },
    { id: 2, name: 'Catana (CTO)', members: '128', status: 'ash is typing' },
    { id: 3, name: 'Catana (CTO)', members: '167', status: 'ash is typing' },
    { id: 4, name: 'Catana (CTO)', members: '2k', status: 'ash is typing' },
    { id: 5, name: 'Catana (CTO)', members: '2.5k', status: 'ash is typing' },
    { id: 6, name: 'Catana (CTO)', members: '2.55k', status: 'ash is typing' },
    { id: 7, name: 'Catana (CTO)', members: '2.7k', status: 'ash is typing' },
    { id: 8, name: 'Catana (CTO)', members: '5k', status: 'ash is typing' },
  ]

  return (
    <div className="fixed right-0 top-16 w-[300px] h-[calc(100vh-64px)] bg-[#1A1A1A] p-4">
      <h2 className="text-xl font-bold mb-4">Groups</h2>
      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.id} className="flex items-center gap-3 p-2 hover:bg-[#2A2A2A] rounded-lg transition-colors">
            <Image
              src=""
              alt={group.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{group.name}</span>
                <svg className="w-4 h-4 text-[#CCFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400">{group.status}</p>
            </div>
            <Badge variant="secondary" className="bg-[#2A2A2A] text-gray-300">
              {group.members}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}

