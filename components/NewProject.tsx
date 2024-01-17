import React from "react";
import Image from "next/image";
import closeIcon from "../images/closeIcon.png";
import CloseButton from "./buttons/CloseButton";

const NewProject = ({ close }: any) => {
  return (
    <div className="flex flex-col w-4/5 sm:w-4/6 md:w-5/12 xl:w-[30%] border-2 border-black p-8 h-fit font-mono shadow-btn-6 bg-white">
       <CloseButton close={close}/>

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
