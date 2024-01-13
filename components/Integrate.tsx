import Image from "next/image";
import React, { useState } from "react";
import Logo from "../images/Logo.png";
import Logo2 from "../images/Logo2.png"
import FilterOptions from "./FilterOptions";

const Integrate = ({ close }: any) => {

    const [showOrderDetails, setShowOrderDetails] = useState(false);
    const [showBrowseDetails, setShowBrowseDetails] = useState(false);
    const [showFilterOptions, setShowFilterOptions] = useState(false);

    const handleOrderDetailsClick = () => {
        setShowOrderDetails(true);
        setShowBrowseDetails(false);
        setShowFilterOptions(false);
    }

    const handleBrowseDetailsClick = () => {
        setShowOrderDetails(false);
        setShowBrowseDetails(true);
        setShowFilterOptions(false);
    }

    const handleFilterOptionsClick = () => {
        setShowBrowseDetails(false);
        setShowOrderDetails(false);
        setShowFilterOptions(true);
    }

  return (
    <div className="flex flex-col w-[70%] border-2 border-black p-8 h-[fit-content] text-black font-mono shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] bg-white">
      <button className="place-self-end mb-6" onClick={close}>
        Close
      </button>
      <div className="flex flex-row">
        <div className="flex flex-col w-[60%]">
          <label>Step 1</label>
          <p className="text-gray-500 my-4">
            Enter your Token Address and Preferred Markup Language.
          </p>
          <div className="flex flex-row mb-10">
            <input
              placeholder="Enter Token Address"
              className="text-sm border-2 border-black p-2 w-[40%]"
            />
            <select className="border-2 border-black ml-4 text-sm w-[40%]">
              <option selected>Select Markup Language</option>
              <option value="HTML">HTML</option>
            </select>
          </div>

          <label>Step 2</label>
          <p className="text-gray-500 my-4">
            Copy the code and paste it in your Website.
          </p>
          <button className="w-[40%] text-black border-2 border-black bg-red-500 shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] py-2">
            Copy Code
          </button>
        </div>

        <div className="flex flex-col border-2 border-black rounded-xl p-6 w-[35%]">
          <div className="flex flex-row justify-between mb-4">
            <div className="flex flex-row">
              <Image
                src={Logo}
                alt="logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className="flex flex-col ml-2">
                <label>Logo</label>
                <p className="text-xs">Mini Market</p>
              </div>
            </div>
            <p>Ethereum</p>
          </div>

          <button className="text-xs w-[35%] place-self-end border border-slate-300 rounded-full p-1 mb-4" onClick={handleFilterOptionsClick}>Filter Options</button>

          <div className="flex flex-row justify-between border border-gray-200 bg-gray-100 px-5 py-2 rounded-md mb-4">
            <button className="text-sm focus:bg-blue-600 focus:text-white py-2 px-4 rounded-md" onClick={handleOrderDetailsClick}>
              Order Details
            </button>
            <button className="text-sm focus:bg-blue-600 focus:text-white py-2 px-4 rounded-md" onClick={handleBrowseDetailsClick}>
              Browse Details
            </button>
          </div>
          {
            showOrderDetails && (
                <div>
                    <div className="flex flex-row justify-between mb-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <p className="ms-3 text-sm font-medium text-black">Crowd Fill</p>
                        </label>

                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <p className="ms-3 text-sm font-medium text-black 0">
                            White List
                        </p>
                        </label>
                    </div>

                    <div className="flex flex-col py-4 px-[10%] bg-gray-100 border border-gray-200 rounded-lg mb-4">
                        <div className="text-gray-500 text-sm flex flex-row justify-between mb-2">
                        <label>GIVE</label>
                        <p>0 USD</p>
                        </div>
                        <div className="flex flex-row justify-between mb-2">
                        <p className="text-xl">0.0</p>
                        <select
                            name="Select token"
                            id="Select token"
                            className="bg-gray-100"
                        >
                            <option selected>Select token</option>
                            <option>Ethereum</option>
                            <option>Bitcoin</option>
                        </select>
                        </div>
                        <p className="text-xs text-gray-500">Max:0</p>
                    </div>

                    <div className="flex flex-col py-4 px-[10%] bg-gray-100 border border-gray-200 rounded-lg mb-4">
                        <div className="text-gray-500 text-sm flex flex-row justify-between mb-6">
                        <label>RECEIVE</label>
                        <p>0 USD</p>
                        </div>
                        <div className="flex flex-row justify-between mb-4">
                        <p className="text-xl">0.0</p>
                        <select
                            name="Select token"
                            id="Select token"
                            className="bg-gray-100"
                        >
                            <option selected>Select token</option>
                            <option>Ethereum</option>
                            <option>Bitcoin</option>
                        </select>
                        </div>
                        <div className="flex flex-row justify-between text-xs mb-2">
                        <p>Market Price/Token : </p>
                        <p>X.XXXXXX BTC</p>
                        </div>
                        <div className="flex flex-row justify-between text-xs mb-2">
                        <p>Your Price : </p>
                        <p>-BTC</p>
                        </div>
                        <p className="place-self-end text-xs">Transfer Tax is Unknown</p>
                    </div>

                    <button className="w-full text-black border-2 border-black bg-orange-600 shadow-[rgba(0,0,0,1)_2px_2px_0px_1px] py-2 rounded-md">
                        Send Order
                    </button>

                </div>
            )
          }

          {
            showBrowseDetails && (
                <div className="flex flex-col">
                    <label className="relative inline-flex items-center cursor-pointer mb-4">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <p className="ms-3 text-sm font-medium text-black">Show my Orders</p>
                    </label>
                    <div className="flex flex-col p-4 bg-gray-100 border border-gray-200 rounded-lg mb-4">
                        <div className="flex flex-row justify-between mb-4">
                            <Image src={Logo2} alt='logo2' width={50} className="h-[50px] rounded-md"/>
                            <div className="flex flex-col text-xs font-semibold py-2">
                                <label className="">BRAND NAME</label>
                                <p>˅77.2%</p>
                            </div>
                            <div className="flex flex-row bg-yellow-100 text-xs py-2 px-2 rounded-md">
                                <p>↕</p>
                                <div className="flex flex-col">
                                    <p className="font-semibold">7.6K BRAND NAME</p>
                                    <p>0.06423ETH</p>
                                </div>
                            </div>
                            <p className="py-2">🔒</p>
                        </div>
                        <button className="w-full text-black border-2 border-black bg-orange-600 shadow-[rgba(0,0,0,1)_2px_2px_0px_1px] py-2 rounded-md">
                        Restricted
                    </button>
                    </div>

                    <div className="flex flex-col p-4 bg-gray-100 border border-gray-200 rounded-lg">
                        <div className="flex flex-row justify-between mb-4">
                            <Image src={Logo2} alt='logo2' width={50} className="h-[50px] rounded-md"/>
                            <div className="flex flex-col text-xs font-semibold py-2">
                                <label className="">BRAND NAME</label>
                                <p>˅77.2%</p>
                            </div>
                            <div className="flex flex-row bg-yellow-100 text-xs py-2 px-2 rounded-md">
                                <p>↕</p>
                                <div className="flex flex-col">
                                    <p className="font-semibold">7.6K BRAND NAME</p>
                                    <p>0.06423ETH</p>
                                </div>
                            </div>
                            <p className="py-2">🔒</p>
                        </div>
                        <button className="w-full text-black border-2 border-black bg-orange-600 shadow-[rgba(0,0,0,1)_2px_2px_0px_1px] py-2 rounded-md">
                        Restricted
                    </button>
                    </div>
                </div>
            )
          }

          {
            showFilterOptions && (
                <FilterOptions/>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Integrate;
