import React from 'react'
import Image from 'next/image'
import DOTCSwap from '../images/DOTCSwap.png'
import COTCSwap from '../images/COTCSwap.png'
import NFTSwap from '../images/NFTSwap.png'
import DexSwap from '../images/DexSwap.png'
import DNSwap from '../images/DNSwap.png'
import CCSwap from '../images/CCSwap.png'
import NftSwap2 from '../images/NftSwap2.png'
import Rewards from '../images/Rewards.png'
import Settings from '../images/Settings.png'

const Sidebar = () => {
  return (
    <div className='flex flex-col text-black border-r-2 border-black w-[15%] px-8 font-mono'>
        <div className='flex flex-col border-b-2 border-black items-center'>
            <label className='text-center font-bold my-5'>SWAPS</label>
            <div className='flex flex-col items-center mb-6 '>
                <Image src={DOTCSwap} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>Direct OTC Swap</button>
            </div>
            <div className='flex flex-col items-center mb-6'>
                <Image src={COTCSwap} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>Cross-Chain OTC Swap</button>
            </div>
            <div className='flex flex-col items-center mb-6'>
                <Image src={NFTSwap} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>NFT Swap</button>
            </div>
            <div className='flex flex-col items-center mb-6'>
                <Image src={DexSwap} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>Dex Swap</button>
            </div>
        </div>

        <div className='flex flex-col border-b-2 border-black items-center'>
            <button className='text-center font-bold my-5'>ALL TRADES</button>
            <div className='flex flex-col items-center mb-6 '>
                <Image src={DNSwap} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>Direct Normal Swap</button>
            </div>
            <div className='flex flex-col items-center mb-6'>
                <Image src={CCSwap} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>Cross-Chain Swap</button>
            </div>
            <div className='flex flex-col items-center mb-6'>
                <Image src={NftSwap2} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>NFT Swap</button>
            </div>
        </div>

        <div className='flex flex-col border-b-2 border-black items-center mb-6'>
            <button className='text-center font-bold my-5'>REWARDS & SETTINGS</button>
            <div className='flex flex-col items-center mb-6 '>
                <Image src={Rewards} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>Rewards</button>
            </div>
            <div className='flex flex-col items-center mb-6'>
                <Image src={Settings} alt='DotcSwap' width={30} height={30}/>
                <button className='text-sm'>Settings</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar