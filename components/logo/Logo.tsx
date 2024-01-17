import Image from "next/image";
import React from "react";
import zeta from "@/images/zeta.png";
import { Quicksand } from 'next/font/google'


const quickSand = Quicksand({ subsets: ['latin'] })

export default function Logo() {
  return (
    <div className="flex flex-row justify-center items-center ">
        <Image src={zeta} alt="abc" width={28} height={30} />
        <label className={`ml-1 font-semibold text-sm flex-none `+quickSand.className}>OTC LAYER</label>
      </div>
  );
}
