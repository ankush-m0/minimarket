import React from "react";
import Image from "next/image";
import closeIcon from "../images/closeIcon.png";

const GetApiKey = ({ close }: any) => {
  return (
    <div className="flex flex-col w-[30%] border-2 border-black p-8 h-[fit-content] font-mono shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] bg-white">
      <div className="flex flex-row justify-between mb-4">
        <h1 className="text-black text-xl ">API Key</h1>
        <button className="text-black place-self-end mb-4" onClick={close}>
          <Image
            width="40"
            height="40"
            src={closeIcon}
            alt="cancel"
            className="rounded-full border border-black shadow-[rgba(0,0,0,1)_1px_1px_0px_1px]"
          />
        </button>
      </div>

      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">Your Key</label>
        <p className="border-2 border-black p-2 text-black">
          X.056474393jcmcmcxmxnxmckw8w7ehx
        </p>
      </div>

      <button className="w-[40%] text-black border-2 border-black bg-red-500 shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] py-2">
        Copy Key
      </button>
    </div>
  );
};

export default GetApiKey;
