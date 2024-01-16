import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Init from "@/util";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Init>
      <Component {...pageProps} />
    </Init>
  )
}
