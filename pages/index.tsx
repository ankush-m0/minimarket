import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import MainPage from '@/components/MainPage';

export default function Home() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleShowMainPage = () => {
    setShowMainPage(true);
  };

  return (
    <main className='bg-white h-screen overflow-auto'>
        <Navbar onShowMainPage={handleShowMainPage}/>
        <div className='flex flex-row'>
          <Sidebar/>
          {showMainPage && <MainPage/>}
        </div>
    </main>
  );
}
