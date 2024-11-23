import { Sidebar } from '@/components/pages/sidebar'
import { Header } from '@/components/pages/header'
import { MainContent } from '@/components/pages/main-content'
import { GroupsList } from '@/components//pages/groups-list'

export default function Home() {
  return (
    <div className="flex h-screen bg-[#1c1c1c] text-white">
      <Sidebar />
      <div className="flex flex-col flex-grow overflow-hidden">
        <Header />
        <div className="flex flex-grow overflow-hidden">
          <MainContent />
          <GroupsList />
        </div>
      </div>
    </div>
  )
}

