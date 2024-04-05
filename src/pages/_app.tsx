import Head from "next/head";
import { ThemeProvider } from "@/components/shared/theme-provider";
import type { AppProps } from "next/app";

import "@/styles/index.scss";
import { fontSans } from "@/lib/fonts";

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
        <div className={fontSans.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
