import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Init from "@/util";
import GlobalLayout from "@/components/layout/GlobalLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Init>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </Init>
  );
}
