import React, { useState } from "react";
import Image from "next/image";
import closeIcon from "../images/closeIcon.png";

const FilterOptions = ({ close }: any) => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [tokenType, setTokenType] = useState("");
  return (
    <div className="flex flex-col w-[22%] ml-1 rounded-2xl text-black border-2 border-black p-4 h-[fit-content] font-mono  bg-white">
      <div className="flex flex-row justify-between mb-2">
        <label>Filter Options</label>
        <button className="text-black place-self-end mb-4" onClick={close}>
          <Image
            width="20"
            height="20"
            src={closeIcon}
            alt="cancel"
            className="rounded-full border border-black shadow-[rgba(0,0,0,1)_1px_1px_0px_1px]"
          />
        </button>
      </div>
      <label className="text-sm mb-6">Select Price Range</label>
      <hr />
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 mt-6 mb-6 pr-16 rounded-lg text-sm focus:outline-none mt-4"
        type="search"
        name="search"
        placeholder="🔍Search"
      />
      <p className="text-sm text-gray-500 mb-6">
        Choose from popular Cryptocurrencies
      </p>
      <div className="flex flex-row space-x-2 mb-6 text-xs">
        <div
          className={`${
            selectedCurrency === "Bitcoin"
              ? "border border-black p-1 rounded-lg bg-yellow-200"
              : "border border-black p-1 rounded-lg"
          }`}
        >
          <label className="inline-flex items-center">
            <span className="ml-2 text-gray-700 mr-1">Bitcoin</span>
            <input
              type="radio"
              name="currency"
              value="Bitcoin"
              checked={selectedCurrency === "Bitcoin"}
              onChange={() => setSelectedCurrency("Bitcoin")}
              className="form-radio h-5 w-5 text-gray-600"
            />
          </label>
        </div>

        <div
          className={`${
            selectedCurrency === "Ethereum"
              ? "border border-black p-1 rounded-lg bg-yellow-200"
              : "border border-black p-1 rounded-lg"
          }`}
        >
          <label className="inline-flex items-center">
            <span className="ml-2 text-gray-700 mr-1">Ethereum</span>
            <input
              type="radio"
              name="currency"
              value="Ethereum"
              checked={selectedCurrency === "Ethereum"}
              onChange={() => setSelectedCurrency("Ethereum")}
              className="form-radio h-5 w-5 text-gray-600"
            />
          </label>
        </div>

        <div
          className={`${
            selectedCurrency === "Polygon"
              ? "border border-black p-1 rounded-lg bg-yellow-200"
              : "border border-black p-1 rounded-lg"
          }`}
        >
          <label className="inline-flex items-center">
            <span className="ml-2 text-gray-700 mr-1">Polygon</span>
            <input
              type="radio"
              name="currency"
              value="Polygon"
              checked={selectedCurrency === "Polygon"}
              onChange={() => setSelectedCurrency("Polygon")}
              className="form-radio h-5 w-5 text-gray-600"
            />
          </label>
        </div>
      </div>
      <hr />
      <label className="text-sm text-gray-500 my-6">Select Token Type</label>
      <div className="flex flex-row space-x-2 text-xs">
        <div className="border border-black p-1 rounded-lg">
          <label className="inline-flex items-center">
            <span className="ml-2 text-gray-700 mr-1">All</span>
            <input
              type="radio"
              name="token"
              value="All"
              checked={tokenType === "All"}
              onChange={() => setTokenType("All")}
              className="form-radio h-5 w-5 text-gray-600"
            />
          </label>
        </div>

        <div className="border border-black p-1 rounded-lg">
          <label className="inline-flex items-center">
            <span className="ml-2 text-gray-700 mr-1">Normal</span>
            <input
              type="radio"
              name="token"
              value="Normal"
              checked={tokenType === "Normal"}
              onChange={() => setTokenType("Normal")}
              className="form-radio h-5 w-5 text-gray-600"
            />
          </label>
        </div>

        <div className="border border-black p-1 rounded-lg">
          <label className="inline-flex items-center">
            <span className="ml-2 text-gray-700 mr-1">Cross-Chain</span>
            <input
              type="radio"
              name="token"
              value="Cross-Chain"
              checked={tokenType === "Cross-Chain"}
              onChange={() => setTokenType("Cross-Chain")}
              className="form-radio h-5 w-5 text-gray-600"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
