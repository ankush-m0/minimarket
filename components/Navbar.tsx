import Image from 'next/image'
import React from 'react'
import zeta from '../images/zeta.png'
import zeta2 from '../images/zeta2.png'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between text-black border-b-2 border-black font-mono'>
        <div className='flex flex-row border-r-2 border-black w-[15%] py-4'>
            <Image src={zeta} alt='abc' width={30} height={30} className='ml-10 mr-8'/>
            <label className='pt-1'>OTC LAYER</label>
        </div>
        <div className='flex flex-row border-l-2 border-black pl-12 py-4 w-[35%]'>
            <label className='pr-12 pt-1'>Mini Market</label>
            <div className='flex flex-row'>
                <Image src={zeta2} alt='abc' width={30} height={20}/>
                <label className='pt-1 pl-1'>Zeta Chain</label>
            </div>
            <button className='px-12'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default Navbar