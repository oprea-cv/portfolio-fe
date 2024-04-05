import Head from "next/head";
import { ThemeProvider } from "@/components/shared/theme-provider";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

import "@/styles/index.scss";

const defaultFont = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className={defaultFont.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
