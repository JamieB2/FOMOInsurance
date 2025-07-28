"use client";
// FULL IMPLENETATION TODO - WEB3MODAL
import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { ethers, BrowserProvider, Signer } from "ethers";

interface Web3ContextType {
  provider: BrowserProvider | null;
  signer: Signer | null;
  account: string | null;
  connectWallet: () => Promise<void>;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export function Web3Provider({ children }: { children: ReactNode }) {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<Signer | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const browserProvider = new ethers.BrowserProvider(window.ethereum);
        await browserProvider.send("eth_requestAccounts", []);
        const signerInstance = await browserProvider.getSigner();
        const accountAddress = await signerInstance.getAddress();

        setProvider(browserProvider);
        setSigner(signerInstance);
        setAccount(accountAddress);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          connectWallet();
        } else {
          setAccount(null);
          setSigner(null);
        }
      });
    }
  }, []);

  return (
    <Web3Context.Provider value={{ provider, signer, account, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
};