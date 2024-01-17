import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Init from "@/util";
import { WalletAddressProvider } from "../contexts/WalletAddressContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Init>
      <WalletAddressProvider>
        <Component {...pageProps} />
      </WalletAddressProvider>
    </Init>
  );
}
