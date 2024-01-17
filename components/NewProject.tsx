import React, { useState } from "react";
import Image from "next/image";
import axios from "axios"; // Make sure axios is installed
import closeIcon from "../images/closeIcon.png";
import { useWalletAddress } from "../contexts/WalletAddressContext";

const NewProject = ({ close }: any) => {
  const walletAddress = useWalletAddress();
  const accessToken = localStorage.getItem('access_token');
  console.log(walletAddress);
  console.log(accessToken)
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  // Handle submit action
  // Handle submit action
const handleSubmit = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/minimarket/v1/create-app",
      {
        name,
        email,
        walletAddress,
        projectName,
        projectDescription,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response.data);
    close();
  } catch (error) {
    console.error("Error submitting data", error);
  }
};

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

      {/* Name Input */}
      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">Name</label>
        <input
          placeholder="Enter your Name"
          className="border-2 border-black p-2 text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">E-mail</label>
        <input
          placeholder="Enter your E-mail"
          className="border-2 border-black p-2 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Project Name Input */}
      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">Project Name</label>
        <input
          placeholder="Enter your Project Name"
          className="border-2 border-black p-2 text-black"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      {/* Project Description Input */}
      <div className="flex flex-col border-2 border-black mb-6 p-2">
        <label className="text-black p-2">Project Description</label>
        <textarea
          placeholder="Enter Project Description"
          className="border-2 border-black p-2 h-[150px] text-black"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button
        className="text-black border-2 border-black bg-red-500 shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] py-2"
        onClick={handleSubmit}
      >
        Submit Details
      </button>
    </div>
  );
};

export default NewProject;
