import React, { useState } from "react";
import DeleteProject from "./DeleteProject";
import Image from "next/image";
import closeIcon from "../images/closeIcon.png";
import CloseButton from "./buttons/CloseButton";

const ProjectDetails = ({ close }: any) => {
  const [showDeleteProject, setShowDeleteProject] = useState(false);

  return (
    <div className="flex flex-col w-[60%] border-2 border-black p-8 h-[fit-content] font-mono shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] bg-white">
      <div className="flex flex-row justify-between mb-4 items-center">
        <h1 className="text-black text-2xl ">Project Details</h1>
        <CloseButton close={close}/>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col border-2 border-black mb-6 p-2 w-[48%]">
          <label className="text-black p-2">Name</label>
          <p className="border-2 border-black p-2 text-black">Ankush Dutta</p>
        </div>

        <div className="flex flex-col border-2 border-black mb-6 p-2 w-[48%]">
          <label className="text-black p-2">E-mail</label>
          <p className="border-2 border-black p-2 text-black">abcd@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col border-2 border-black mb-6 p-2 w-[48%]">
        <label className="text-black p-2">Project Name</label>
        <p className="border-2 border-black p-2 text-black">Project 1</p>
      </div>

      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">Project Description</label>
        <p className="p-2 h-[150px] text-black">
          Embed a customized OTC exchange directly on your token or project page
          for a seamless user experience. Project Description about oranges is
          they are tasty. Embed a customized OTC exchange directly on your token
          or project page for a seamless user experience
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <button className="p-2 mr-4 text-black border-2 border-black bg-red-500 shadow-[rgba(0,0,0,1)_3px_3px_0px_1px] py-2">
            Save Details
          </button>
          <button
            className="p-2 text-black border-2 border-black bg-white shadow-[rgba(0,0,0,1)_3px_3px_0px_1px] py-2"
            onClick={() => setShowDeleteProject(true)}
          >
            Delete Project
          </button>
        </div>
        <button
          className="p-2 text-black border-2 border-black bg-white shadow-[rgba(0,0,0,1)_3px_3px_0px_1px] py-2"
          onClick={close}
        >
          Cancel
        </button>
      </div>
      {showDeleteProject && (
        <div className="fixed top-6 left-10 w-full h-full flex items-center justify-center z-50">
          <DeleteProject close={() => setShowDeleteProject(false)} />
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
