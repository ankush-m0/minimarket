import React, { useState } from "react";
import cart from "../images/cart.png";
import Image from "next/image";
import NewProject from "./NewProject";
import ProjectDetails from "./ProjectDetails";
import GetApiKey from "./GetApiKey";
import Integrate from "./Integrate";

const MainPage: React.FC = () => {
  const [showNewProject, setShowNewProject] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showAPIKey, setShowAPIKey] = useState(false);
  const [showIntegrate, setShowIntegrate] = useState(false);
  const projects: any = [];

  return (
    <div className="relative font-mono w-[70%] pl-[5%] py-[50px]">
      <div
        className={`${
          showNewProject || showProjectDetails || showAPIKey || showIntegrate
            ? "filter blur-sm"
            : ""
        }`}
      >
        <div className="flex flex-row">
          <h1 className="text-4xl leading-4 font-semibold text-gray-900 pt-5">
            Mini-Markets
          </h1>
          <Image src={cart} alt="cart" width={60} height={60} />
        </div>
        <p className="my-2 text-2xl font-semibold text-black">
          Showcase orders exclusively for your token.
        </p>
        <p className="text-xl text-gray-500">
          Embed a customized OTC exchange directly on your token or project page
          for a seamless user experience.
        </p>

        <div className="mt-5">
          <div className="flex flex-row justify-end">
            <button
              className="text-white font-bold py-2 px-4 bg-indigo-500 border-2 border-black shadow-[rgba(0,0,0,1)_5px_5px_0px_1px] hover:bg-blue-700"
              onClick={() => setShowIntegrate(true)}
            >
              Show how to Integrate
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 ml-4 border-2 border-black shadow-[rgba(0,0,0,1)_5px_5px_0px_1px]"
              onClick={() => setShowNewProject(true)}
            >
              Create New Project
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-8 border-2 border-black shadow-[rgba(0,0,0,1)_5px_5px_0px_1px]">
          <table className="min-w-full divide-y divide-gray-400">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="pr-14 pl-6 py-3 text-left text-lg font-semibold text-black tracking-wider"
                >
                  Project Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-semibold text-black tracking-wider"
                >
                  Created On
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-semibold text-black tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-black">
              {/* {projects.length === 0 ? (
                      <p className="text-gray-500 px-6">
                        You don&#39;t have any projects yet.
                      </p>
                    ) : ( */}
              <tr>
                <td className="pr-14 pl-6 py-4 whitespace-nowrap text-sm text-black">
                  Project 1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  12/01/2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  <button
                    className="border-2 border-black p-2 shadow-[rgba(0,0,0,1)_3px_3px_0px_1px]"
                    onClick={() => setShowAPIKey(true)}
                  >
                    Get Key
                  </button>
                </td>
              </tr>

              <tr>
                <td className="pr-14 pl-6 py-4 text-sm text-black">
                  Project 2
                </td>
                <td className="px-6 py-4 text-sm text-black">6/01/2024</td>
                <td className="px-6 py-4 text-sm text-black">
                  <button className="mr-4 border-2 border-black p-2 shadow-[rgba(0,0,0,1)_3px_3px_0px_1px]">
                    API Key
                  </button>
                  <button
                    className="border-2 border-black p-2 shadow-[rgba(0,0,0,1)_3px_3px_0px_1px]"
                    onClick={() => setShowProjectDetails(true)}
                  >
                    Details
                  </button>
                </td>
              </tr>
              {/* )} */}
            </tbody>
          </table>
        </div>
      </div>

      {showNewProject && (
        <div className="fixed top-6 left-10 w-full h-full flex items-center justify-center z-50">
          <NewProject close={() => setShowNewProject(false)} />
        </div>
      )}

      {showProjectDetails && (
        <div className="fixed top-6 left-10 w-full h-full flex items-center justify-center z-50">
          <ProjectDetails close={() => setShowProjectDetails(false)} />
        </div>
      )}

      {showAPIKey && (
        <div className="fixed top-6 left-10 w-full h-full flex items-center justify-center z-50">
          <GetApiKey close={() => setShowAPIKey(false)} />
        </div>
      )}

      {showIntegrate && (
        <div className="fixed top-6 left-10 w-full h-full flex items-center justify-center z-50">
          <Integrate close={() => setShowIntegrate(false)} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
