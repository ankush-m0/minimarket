import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

// Create the context
const WalletAddressContext = createContext(null);

// Export the useWalletAddress hook
export const useWalletAddress = () => useContext(WalletAddressContext);

// Provider component
export const WalletAddressProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState(null);
    const { address } = useAccount();

    useEffect(() => {
        setWalletAddress(address);
    }, [address]);

    return (
        <WalletAddressContext.Provider value={walletAddress}>
            {children}
        </WalletAddressContext.Provider>
    );
};
