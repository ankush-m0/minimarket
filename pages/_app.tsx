import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Init from "@/util";
import GlobalLayout from "@/components/layout/GlobalLayout";
import { WalletAddressProvider } from "@/contexts/WalletAddressContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Init>
      <WalletAddressProvider>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </WalletAddressProvider>
    </Init>
  );
}