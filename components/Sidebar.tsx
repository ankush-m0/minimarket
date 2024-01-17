import React from "react";
import Image from "next/image";
import DOTCSwap from "../images/DOTCSwap.png";
import COTCSwap from "../images/COTCSwap.png";
import NFTSwap from "../images/NFTSwap.png";
import DexSwap from "../images/DexSwap.png";
import DNSwap from "../images/DNSwap.png";
import CCSwap from "../images/CCSwap.png";
import NftSwap2 from "../images/NftSwap2.png";
import Rewards from "../images/Rewards.png";
import Settings from "../images/Settings.png";
import Logo from "./logo/Logo";
import Link from "next/link";
import cart from "../images/cart.png";

export default function Sidebar() {
  return (
    <div className="flex flex-col ">
      <div className="md:border-b-2  border-black py-3 md:py-4">
        <Logo />
      </div>
      <div className="w-3/4 mx-auto text-center space-y-5 ">
        <div className=" border-b border-black flex md:hidden flex-col justify-center py-5 ">
          <Image
            src={cart}
            alt="cart"
            width={40}
            height={40}
            className="w-8 mx-auto"
          />
          <Link href={"/minimarket"} className="text-sm">
            Mini-Market
          </Link>
        </div>
        <div className="flex flex-col border-b border-black items-center gap-5 pb-5">
          <label className="text-center font-bold">SWAPS</label>
          <div className="flex flex-col items-center ">
            <Image src={DOTCSwap} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">Direct OTC Swap</button>
          </div>
          <div className="flex flex-col items-center">
            <Image src={COTCSwap} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">Cross-Chain OTC Swap</button>
          </div>
          <div className="flex flex-col items-center">
            <Image src={NFTSwap} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">NFT Swap</button>
          </div>
          <div className="flex flex-col items-center">
            <Image src={DexSwap} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">Dex Swap</button>
          </div>
        </div>

        <div className="flex flex-col border-b border-black items-center gap-5 pb-5">
          <button className="text-center font-bold">ALL TRADES</button>
          <div className="flex flex-col items-center ">
            <Image src={DNSwap} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">Direct Normal Swap</button>
          </div>
          <div className="flex flex-col items-center">
            <Image src={CCSwap} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">Cross-Chain Swap</button>
          </div>
          <div className="flex flex-col items-center">
            <Image src={NftSwap2} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">NFT Swap</button>
          </div>
        </div>

        <div className="flex flex-col border-b border-black items-center gap-5 pb-5">
          <button className="text-center font-bold">REWARDS & SETTINGS</button>
          <div className="flex flex-col items-center  ">
            <Image src={Rewards} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">Rewards</button>
          </div>
          <div className="flex flex-col items-center ">
            <Image src={Settings} alt="DotcSwap" width={30} height={30} />
            <button className="text-sm">Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
