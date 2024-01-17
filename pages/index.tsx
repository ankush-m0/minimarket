import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import MainPage from '@/components/MiniMarket';


export default function Home() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleShowMainPage = () => {
    setShowMainPage(true);
  };

  return  (
    <div>
          
    </div>
  )
}
