import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { useWeb3Modal } from "@web3modal/react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSignMessage,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import CustomModal from "./modal/modal";
import { InjectedConnector } from "wagmi/connectors/injected";
import Cookies from "universal-cookie";
import { getAccount, signMessage } from "@wagmi/core";
import zeta from "../images/zeta.png";
import zeta2 from "../images/zeta2.png";
import { useRouter } from "next/router";
import MainPage from "./MainPage";

const Navbar = ({ onShowMainPage }:any) => {
  const { chain } = useNetwork();
  const [loginCred, setLoginCred] = useState();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav
  console.log("chains", chains);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const router = useRouter();
  const [selectedNetwork, setSelectedNetwork] = useState({
    label: "Select a Network",
    src: "",
  });
  const { isConnected, address } = useAccount({
    onConnect({ address }) {
      if (!address) return;
      // handleTokens(address);
    },
  });

  const [nextNetwork, setNextNetwork] = useState({
    label: "Select a Network",
    src: "",
    id: 0,
  });
  const [activeLink, setActiveLink] = useState<number | null>(null);
  //   If button is there
  const handleClick = () => {
    if (isMobileNavOpen) {
      setisMobileNavOpen(false);
    }
  };

  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();

  const handleNetwork = () => {
    if (chain?.id === nextNetwork.id) {
      setSelectedNetwork({
        label: nextNetwork.label,
        src: nextNetwork.src,
      });
    }
  };

  useEffect(() => {
    if (!isConnected) {
      setSelectedNetwork({
        label: "",
        src: "",
      });
    } else {
      const selectedNetwork = network.find((item) => item.id === chain?.id);
      // const { label, src } = selectedNetwork;
      // console.log("selectedNetwork:", selectedNetwork?.label);
      // console.log("Src:", src);
      if (selectedNetwork != null) {
        setSelectedNetwork({
          label: selectedNetwork?.label,
          src: selectedNetwork?.src,
        });
      } else {
        setSelectedNetwork({
          label: "Unsupported Network",
          src: "",
        });
      }
    }
    if (!isLoading) {
      handleNetwork();
    }
  }, [isLoading, isConnected]);

  // console.log(chains, isLoading);
  const network = [
    { label: "Zetachain Athens 2", src: "/zetalogonew.png", id: 7001 },
    { label: "ETH Goerli", src: "/eth.png", id: 5 },
    { label: "Polygon Mumbai", src: "/polygon.png", id: 80001 },
    { label: "BSC Testnet", src: "/binancedex.png", id: 97 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // const { data, isError, isSuccess, signMessage } = useSignMessage({
  //   message: `Signing with acc: ${address}`,
  // });
  const signAccount = async () => {
    const signature = signMessage({
      message: `Signing with acc: ${address}`,
    });
    return signature;
  };
  const handleLogin = async () => {
    const signature = await signAccount();
    console.log("data", signature);
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        walletAddress: address,
        signature: signature,
      });
      // Saving tokens in localStorage
      localStorage.setItem("access_token", response.data.accessToken);
      localStorage.setItem("refresh_token", response.data.refreshToken);
      setLoginCred(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const [connectText, setConnectText] = useState<string | null>(null);
  useEffect(() => {
    if (isConnected) {
      setConnectText(`${address}`);
      // Check if access_token is already present
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        handleLogin();
      } else {
        // Handle case if the token is already in localStorage
        // e.g., set user login state based on token
        // setLoginCred({ ... }); // Set appropriate login credentials
      }
    } else {
      setConnectText("Connect Wallet");
    }
  }, [isConnected]);
  // useEffect(() => {
  //   disconnect();
  // }, [isError]);
  console.log("loginCred", loginCred);

  return (
    <div className="flex flex-row justify-between text-black border-b-2 border-black font-mono">
      <div className="flex flex-row border-r-2 border-black w-[15%] py-4">
        <Image
          src={zeta}
          alt="abc"
          width={30}
          height={30}
          className="ml-10 mr-8"
        />
        <label className="pt-1">OTC LAYER</label>
      </div>
      <div className="flex flex-row border-l-2 border-black pl-12 py-4 w-[40%]">
        <label className="pr-12 pt-1 cursor-pointer" onClick={onShowMainPage}>Mini Market</label>
        <div className="flex flex-row">
          <Image src={zeta2} alt="abc" width={30} height={20} />
          <label className="pt-1 pl-1">Zeta Chain</label>
        </div>
        <button
          onClick={openModal}
          className={`ml-2 px-2 bg-white/10 rounded-md bg-red-500 ${
            selectedNetwork.src ? "bg-[#ffffff]" : "bg-white/10"
          }`}
        >
          <div className="flex">
            {selectedNetwork.src && (
              <div className="min-w-fit">
                <Image
                  src={selectedNetwork.src}
                  alt="Crypto"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="mr-2 w-6 "
                />
              </div>
            )}

            <p className="text-md">{selectedNetwork.label}</p>
          </div>
        </button>
        <button
          className=""
          // onClick={() => {
          //   isConnected ? disconnect() : connect();
          //   //  isConnected?disconnect(): connect()
          // }}
          // onClick={() => {
          //   isConnected ? disconnect() : connect();
          // }}
          onClick={() => open()}
        >
          {isConnected ? (
            <p className="ml-2 w-[8rem] text-ellipsis overflow-hidden ...">
              {address}
            </p>
          ) : (
            <p className="">Connect Wallet</p>
          )}
        </button>
        <CustomModal
          title="Switch Network"
          handleExit={closeModal}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        >
          <div className="px-4 pb-8  ">
            <ul className="">
              {/* {network?.map((item, index) => (
              <li
                onClick={() => {
                  handleNetwork(item.src, item.label);
                }}
                key={index}
              >
                <div className="text-sm mt-4 z-50 w-full h-[3rem] 3xl:h-[5rem] 4xl:h-[8rem] flex items-center rounded-xl 4xl:rounded-[2rem]  bg-white/5 hover:bg-white/10 px-4 py-2 3xl:py-8 text-white cursor-pointer">
                  <div className="mr-2">
                    <Image
                      src={item.src} // change this later on
                      alt="ethereum"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="3xl:w-[2rem] 4xl:w-[3rem] w-[2rem] h-full"
                    />
                  </div>
                  <p className="3xl:text-3xl 4xl:text-4xl">{item.label}</p>
                </div>
              </li>
            ))} */}
              {!isConnected && (
                <div>
                  <p>Connect Your wallet</p>
                </div>
              )}
              {network?.map((item, index) => {
                const chainNetwork = chains.find((c) => c.id === item.id);

                if (!chainNetwork) {
                  return null; // Handle case when corresponding chain is not found
                }
                return (
                  <li
                    onClick={() => {
                      switchNetwork?.(item.id);
                      // handleNetwork(item.src, item.label, item.id);
                      setNextNetwork({
                        label: `${item.label}`,
                        src: `${item.src}`,
                        id: item.id,
                      });
                    }}
                    key={index}
                  >
                    <div className="text-sm mt-4 z-50 w-full h-[3rem] flex items-center justify-between rounded-xl  bg-white/5 hover:bg-white/10 px-4 py-2 text-white cursor-pointer">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <Image
                            src={item.src} // change this later on
                            alt="chainNetwork"
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="w-[2rem] h-full"
                          />
                        </div>

                        <p className="">{item.label}</p>
                      </div>
                      {chain?.id === item.id ? (
                        <p className="flex items-center">
                          Connected{" "}
                          <RxDotFilled className="text-xl text-[#30E000]" />
                        </p>
                      ) : (
                        isLoading &&
                        pendingChainId === item.id && (
                          <p className="flex items-center">
                            Confirm in wallet{" "}
                            <RxDotFilled className="text-xl text-[#FFD641]" />
                          </p>
                        )
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </CustomModal>
      </div>
    </div>
  );
};

export default Navbar;
