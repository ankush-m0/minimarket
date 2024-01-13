import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MainPage from '@/components/MainPage'
import ProjectDetails from '@/components/ProjectDetails'
import DeleteProject from '@/components/DeleteProject'
import GetApiKey from '@/components/GetApiKey'
import Integrate from '@/components/Integrate'
import FilterOptions from '@/components/FilterOptions'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white h-screen overflow-auto'>
        <Navbar/>
        <div className='flex flex-row'>
          <Sidebar/>
          <MainPage/>
          {/* <ProjectDetails/> */}
          {/* <DeleteProject/> */}
          {/* <GetApiKey/> */}
          {/* <Integrate/> */}
          {/* <FilterOptions/> */}
        </div>
    </main>
  )
}
