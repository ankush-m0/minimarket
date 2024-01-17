import React, { useEffect, useState } from "react";
import cart from "../images/cart.png";
import Image from "next/image";
import NewProject from "./NewProject";
import ProjectDetails from "./ProjectDetails";
import GetApiKey from "./GetApiKey";
import Integrate from "./Integrate";
import PrimaryBtnComponent from "./buttons/PrimaryButton";
import axios from "axios";

const MainPage: React.FC = () => {
  const [showNewProject, setShowNewProject] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showAPIKey, setShowAPIKey] = useState(false);
  const [showIntegrate, setShowIntegrate] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleShowProjects = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      console.log("access-token:", accessToken);
      const response = await axios.get(
        "http://localhost:8000/minimarket/v1/fetch-all-projects",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      setProjects(response.data.projects);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  useEffect(() => {
    handleShowProjects();
  }, []);

  return (
    <div className="w-full lg:w-3/4">
      <div
        className={`${
          showNewProject || showProjectDetails || showAPIKey || showIntegrate
            ? "filter blur-sm"
            : ""
        }  space-y-8 tracking-tight`}
      >
        <div className="space-y-3">
          <div className="flex flex-row items-center space-x-3">
            <h1 className="text-3xl lg:text-4xl leading-4 font-semibold ">
              Mini-Markets
            </h1>
            <Image
              src={cart}
              alt="cart"
              width={60}
              height={60}
              className="w-10"
            />
          </div>
          <p className="my-2 text-xl lg:text-2xl font-semibold">
            Showcase orders exclusively for your token.
          </p>
          <p className="text-base lg:text-xl text-gray-500">
            Embed a customized OTC exchange directly on your token or project
            page for a seamless user experience.
          </p>
        </div>
        <div className="flex flex-row justify-end pt-5 gap-5">
          <PrimaryBtnComponent
            text={"Show how to Integrate"}
            type="button"
            onClick={() => setShowIntegrate(true)}
            className="bg-[#5162FF] text-white px-4"
            variant="filled"
          />

          <PrimaryBtnComponent
            text={"Create New Project"}
            type="button"
            onClick={() => setShowNewProject(true)}
            variant="filled"
          />
        </div>

        <div className="flex flex-col mt-8 border-2 border-black shadow-btn-6 overflow-auto">
          <table className="min-w-full divide-y-2 divide-gray-800 ">
            <thead className="bg-gray-200 w-full  text-black">
              <tr className="text-left text-base">
                <th
                  scope="col"
                  className="xs-m:pr-14 pl-6 py-3 whitespace-nowrap "
                >
                  Project Name
                </th>
                <th scope="col" className="px-6 whitespace-nowrap ">
                  Created On
                </th>
                <th scope="col" className="px-6 whitespace-nowrap ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-black  text-base">
              {projects.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center text-gray-500 px-6 py-3"
                  >
                    You don&#39;t have any projects yet.
                  </td>
                </tr>
              ) : (
                projects.map((project, index) => {
                  console.log("project ======> ", project);
                  return (
                    <tr key={index}>
                      <td className="xs-m:pr-14 pl-6 py-4">
                        {project}
                      </td>
                      <td className="px-6 py-4">{project}</td>
                      <td className="flex flex-wrap items-center px-6 py-4 gap-4">
                        <PrimaryBtnComponent
                          text={"Get Key"}
                          type="button"
                          onClick={() => setShowAPIKey(true)}
                          variant="outline"
                          className="font-normal shadow-btn-2 text-sm px-2 border"
                        />
                      </td>
                    </tr>
                  );
                })
              )}
              {/* <tr>
                <td className="xs-m:pr-14 pl-6 py-4 whitespace-nowrap">Project 1</td>
                <td className="px-6 py-4 whitespace-nowrap">12/01/2024</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <PrimaryBtnComponent
                    text={"Get Key"}
                    type="button"
                    onClick={() => setShowAPIKey(true)}
                    variant="outline"
                    className="font-normal shadow-btn-2 text-sm px-2 border"
                  />
                </td>

              </tr>

              <tr>
                <td className="xs-m:pr-14 pl-6 py-4">Project 2</td>
                <td className="px-6 py-4">6/01/2024</td>
                <td className="flex flex-wrap items-center px-6 py-4 gap-4">
                  <PrimaryBtnComponent
                    text={"API Key"}
                    type="button"
                    variant="outline"
                    className="font-normal shadow-btn-2 text-sm px-2 border"
                  />
                  <PrimaryBtnComponent
                    text={"Details"}
                    type="button"
                    variant="outline"
                    onClick={() => setShowProjectDetails(true)}
                    className="font-normal shadow-btn-2 text-sm px-2 border"
                  />
                </td>
              </tr> 
               */}
            </tbody>
          </table>
        </div>
      </div>

      {showNewProject && (
        <div className="fixed top-2 md:top-6 left-0 md:left-10 w-full flex items-center justify-center z-50">
          <NewProject close={() => setShowNewProject(false)} />
        </div>
      )}

      {showProjectDetails && (
        <div className="fixed top-2 md:top-6 left-0 md:left-10 w-full flex items-center justify-center z-50">
          <ProjectDetails close={() => setShowProjectDetails(false)} />
        </div>
      )}

      {showAPIKey && (
        <div className="fixed top-2 md:top-6 left-0 md:left-10 w-full flex items-center justify-center z-50">
          <GetApiKey close={() => setShowAPIKey(false)} />
        </div>
      )}

      {showIntegrate && (
        <div className="absolute top-10 h-3/4 md:top-32 right-0 mx-5 xs-m:w-3/4 xs-m:mx-auto left-0 ">
          <Integrate close={() => setShowIntegrate(false)} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
