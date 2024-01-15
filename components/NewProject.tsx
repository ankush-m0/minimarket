import React from "react";
import Image from "next/image";
import closeIcon from "../images/closeIcon.png";

const NewProject = ({ close }: any) => {
  return (
    <div className="flex flex-col w-[30%] border-2 border-black p-8 h-[fit-content] font-mono shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] bg-white">
      <button className="text-black place-self-end mb-4" onClick={close}>
        <Image
          width="40"
          height="40"
          src={closeIcon}
          alt="cancel"
          className="rounded-full border border-black shadow-[rgba(0,0,0,1)_1px_1px_0px_1px]"
        />
      </button>

      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">Name</label>
        <input
          placeholder="Enter your Name"
          className="border-2 border-black p-2 text-black"
        />
      </div>

      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">E-mail</label>
        <input
          placeholder="Enter your E-mail"
          className="border-2 border-black p-2 text-black"
        />
      </div>

      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">Project Name</label>
        <input
          placeholder="Enter your Project Name"
          className="border-2 border-black p-2 text-black"
        />
      </div>

      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">Project Description</label>
        <textarea
          placeholder="Enter Project Description"
          className="border-2 border-black p-2 h-[150px] text-black"
        />
      </div>

      <button className="text-black border-2 border-black bg-red-500 shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] py-2">
        Submit Details
      </button>
    </div>
  );
};

export default NewProject;
