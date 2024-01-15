import React from "react";
import Image from "next/image";
import closeIcon from "../images/closeIcon.png";

const DeleteProject = ({ close }: any) => {
  return (
    <div className="flex flex-col w-[20%] border-2 border-black p-8 h-[fit-content] font-mono shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] bg-white">
      <button className="text-black place-self-end mb-4" onClick={close}>
        <Image
          width="40"
          height="40"
          src={closeIcon}
          alt="cancel"
          className="rounded-full border border-black shadow-[rgba(0,0,0,1)_1px_1px_0px_1px]"
        />
      </button>
      <p className="mb-4 text-black text-center">
        Are you sure you want to delete the Project?{" "}
      </p>
      <button className="text-black border-2 border-black bg-red-500 shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] py-2">
        Delete Project
      </button>
    </div>
  );
};

export default DeleteProject;
