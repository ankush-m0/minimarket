import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="w-full flex flex-row  min-h-screen bg-white font-mono relative">
      {/* laptop sidebar */}
      <div
        className={"border-r-2 border-black hidden md:block md:w-1/5 lg:w-[18%] xl:w-[15%] 2xl:w-1/6"}
      >
        <Sidebar />
      </div>

      {/* mobile sidebar */}
      <div
        className={`md:hidden absolute bg-white z-50 shadow-lg px-3 transition-transform transform ${
          sideBar ? " max-h-screen overflow-auto " : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      <div className="w-full flex flex-col h-full ">
        <Navbar showSidebar={setSideBar} sideBar={sideBar} />
        <div className="px-10 pt-12 min-h-screen">{children}</div>
      </div>
    </div>
  );
}
