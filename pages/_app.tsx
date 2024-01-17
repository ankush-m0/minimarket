import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Init from "@/util";
<<<<<<< HEAD
import GlobalLayout from "@/components/layout/GlobalLayout";
=======
import { WalletAddressProvider } from "../contexts/WalletAddressContext";
>>>>>>> 955af149b55593b6b6a2789d9ae4f5b26b0d9a70

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Init>
<<<<<<< HEAD
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
=======
      <WalletAddressProvider>
        <Component {...pageProps} />
      </WalletAddressProvider>
>>>>>>> 955af149b55593b6b6a2789d9ae4f5b26b0d9a70
    </Init>
  );
}
