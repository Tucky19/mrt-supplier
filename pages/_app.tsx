import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Splash from "@/components/Splash";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Splash />
      <Component {...pageProps} />
    </>
  );
}
